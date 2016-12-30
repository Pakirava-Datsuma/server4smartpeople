/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
// import {Panel} from 'react-bootstrap';
import SmartList from './SmartList';
import {UserController, HouseController} from './ApiList';
import InitialData from './InitialData';
import AddItemModal from './AddItemModal';

export default class UsersList extends React.Component {

    static propTypes = {
        onOpenUser: React.PropTypes.func,
    };

    constructor() {
        super();
        this.state = {
            users: InitialData.users.map((user) =>
                user.houses = InitialData.houses),
            showAddUserModal: false,
        };
        console.log(this.state.users[0].houses[0].name);
        this.onGetUsers = this.onGetUsers.bind(this);
        this.onGetHousesForUser = this.onGetHousesForUser.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.onShowAddUserModal = this.onShowAddUserModal.bind(this);
        this.onHideAddUserModal = this.onHideAddUserModal.bind(this);
    }

    onShowAddUserModal() {this.setState({showAddUserModal: true});
        console.log("AddUserModal starting...")}
    onHideAddUserModal() {this.setState({showAddUserModal: false})}

    onAddUser(user) {
        UserController.create(user, (newUser) => {
            let newUsers = this.state.users.concat(newUser);
            this.setState({users: newUsers});
            console.log("user added, upd pls");
            console.log("user sent: " + user);
            console.log("user got: " + newUser);
        });
        return true;
    }

    onRemoveUser (user) {
        console.log("removing user " + user.id);
        UserController.remove(user, (result) => {
            if (result) {
                this.onGetUsers();
            } else {
                alert("Server declined removing this");
            }
        })
    }


    onGetUsers() {
        console.log("updating users...");
        UserController.list((users)=>{
            console.log("users: " + users.toString());
            this.setState({users: users});
        });
    }

    onGetHousesForUser(userId) {
        console.log("updating houses for " + userId);
        // TODO: HouseController.getChildren(userId, (houses)=>{
        HouseController.list(userId, (houses)=> {
            console.log("houses: " + houses);
            this.setState({
                users: this.state.users
                    .find((user) => user.id == userId)
                    .houses = houses
            });
        });
    }

    render () {
        console.log("UsersList rendering");

        return <SmartList editable={true}
                          items={this.state.users}
                          onOpenItem={this.props.onOpenUser}
                          onAddItem={this.onAddUser}
                          onGetChildren={this.onGetHousesForUser}
                          onRemoveItem={this.onRemoveUser}
        />;
    }
}

export const AddUserModal = () =>
    <AddItemModal title="New user"
                  entity="User"
                  glyph="user"
                  show={this.state.showAddUserModal}
                  onHide={this.onHideAddUserModal}
                  onAdd={this.onAddUser}
                  btnOk="Create"
                  btnCancel="Cancel"
/>;
