/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import {Link}                                                                                                                                                                                    from 'react-router';
// import {Panel} from 'react-bootstrap';
import SmartList from './SmartList';
import {UserController, HouseController} from './ApiList';
import {defaultUsers, defaultHouses} from './InitialData';
import AddItemModal from './AddItemModal';

export default class UsersList extends React.Component {

    constructor() {
        super();
        this.state = {
            users: defaultUsers,
            showAddUserModal: false,
            loading: false,
        };
        this.onGetUsers = this.onGetUsers.bind(this);
        this.onOpenUser = this.onOpenUser.bind(this);
        this.onOpenHouse = this.onOpenHouse.bind(this);
        this.onGetHousesForUser = this.onGetHousesForUser.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.onShowAddUserModal = this.onShowAddUserModal.bind(this);
        this.onHideAddUserModal = this.onHideAddUserModal.bind(this);
        this.onRemoveUser = this.onRemoveUser.bind(this);
    }

    onShowAddUserModal() {this.setState({showAddUserModal: true});
        console.log("AddUserModal starting...")}
    onHideAddUserModal() {this.setState({showAddUserModal: false})}

    onOpenUser (id) {
        this.setState({loading: true,});
        return <Link to={"/users/" + id}/>;
    }
    onOpenHouse (id) {
        this.setState({loading: true,});
        return <Link to={"/houses/" + id}/>;
    }

    onCreateUser() {
        this.setState({showAddUserModal: true,})
    }

    onAddUser(user) {
        this.setState({loading: true,});
        UserController.create(user, (newUser) => {
            let newUsers = this.state.users;
            newUsers.push(newUser);
            this.setState({
                users: newUsers,
                loading:false,
            });
            console.log("user added, upd pls");
            console.log("user sent: " + user);
            console.log("user got: " + newUser);
        });
        return true;
    }

    onRemoveUser (user) {
        this.setState({loading: true,});
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
        this.setState({loading: true,});
        console.log("updating users...");
        // UserController.list((users)=>{
        //     console.log("users: " + users.toString());
            let newUsers = defaultUsers.map((user) => {
                user.children = [];
                return user;
            });
            this.setState({
                // users: users,
                users: newUsers,
                loading: false,});
        // });
    }

    onGetHousesForUser(userId) {
        console.log("updating houses for " + userId);
        // TODO: HouseController.getChildren(userId, (houses)=>{
        // HouseController.list(userId, (houses)=> {
        //     console.log("houses: " + houses);
            let users = this.state.users;
            let user = users.find((user) => {return user.id == userId});
            console.log("user found: " + user.name);
            user
                // .houses = houses;
                .children = defaultHouses;
            console.log("now he/she has houses: " + user.children.length);
        this.setState({
                users: users
            });
        // });

    }

    componentDidMount() {
        this.onGetUsers();
    }

    render () {
        console.log("UsersList rendering");
        return <div>
            <SmartList items={this.state.users}
                       onOpenItem={this.onOpenUser}
                       onAddItem={this.onAddUser}
                       onRemoveItem={this.onRemoveUser}
                       isLoading={this.state.loading}
                       onGetChildren={this.onGetHousesForUser}
                       onOpenChild={this.onOpenHouse}
            />
            <AddItemModal title="New user"
                          entity="User"
                          glyph="user"
                          show={this.state.showAddUserModal}
                          onHide={this.onHideAddUserModal}
                          onAdd={this.onAddUser}
                          btnOk="Create"
                          btnCancel="Cancel"
            />
        </div>;
    }
}
