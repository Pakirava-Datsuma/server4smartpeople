/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import {Link}                                                                                                                                                                                    from 'react-router';
// import {Panel} from 'react-bootstrap';
import Snackbar from 'material-ui/Snackbar';
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
            showAddHouseModal: false,
            loading: false,
            showError: false,
            errorMessage: "",
        };
        this.onGetUsers = this.onGetUsers.bind(this);
        this.LinkToUserPage = this.LinkToUserPage.bind(this);
        this.LinkToHousePage = this.LinkToHousePage.bind(this);
        this.onGetHousesForUser = this.onGetHousesForUser.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.onShowAddUserModal = this.onShowAddUserModal.bind(this);
        this.onHideAddUserModal = this.onHideAddUserModal.bind(this);
        this.onRemoveUser = this.onRemoveUser.bind(this);
        this.onAddHouse = this.LinkToHousePage.bind(this);
        this.onRemoveHouse = this.LinkToHousePage.bind(this);
        this.onShowAddHouseModal = this.onShowAddHouseModal.bind(this);
        this.onHideAddHouseModal = this.onHideAddHouseModal.bind(this);
        this.showError = this.showError.bind(this);
    }

    showError(message) {
        this.setState({
            showError: true,
            errorMessage: message,
            loading: false,
        });
    }

    onShowAddHouseModal() {console.log("onShowAddHouseModal");
    this.setState({showAddHouseModal: true})}
    onHideAddHouseModal() {console.log("onHideAddHouseModal");
        // this.setState({showAddHouseModal: false})
    }


    onAddHouse(house){
        house.owner = house.parent;

        HouseController.create(house, (newHouse) => {
            this.onGetUsers();
        })
    }

    onRemoveHouse(house){
        console.log("onRemoveHouse");
        HouseController.create(house.id, (result) => {
            this.onGetUsers();
        })

    }

    onShowAddUserModal() {this.setState({showAddUserModal: true});
        console.log("AddUserModal starting...")}
    onHideAddUserModal() {this.setState({showAddUserModal: false})}

    LinkToUserPage (id) {
        console.log("LinkToUserPage");
        return <Link to={"/users/" + id}/>;
    }
    LinkToHousePage (id) {
        console.log("LinkToHousePage");
        return <Link to={"/houses/" + id}/>;
    }

    onAddUser(user) {
        console.log('onAddUser');
        this.setState({
            users: this.state.users.push(user),
            loading: true,
        });
        UserController.create(user, (newUser) => {
            // console.log("user sent: " + user);
            // user.id = newUser.id;
            // this.setState({
            //     users: this.state.users
            //     loading: false,
            // });
            // console.log("user got: " + newUser);
            this.onGetUsers();
        });
    }


    onRemoveUser (oldUser) {
        console.log("removing user " + oldUser.id);
        let users = this.state.users;
        users.splice(users.findIndex((user) => {return user == oldUser}), 1);
        // this.setState({
        //     users: users,
        //     loading: true,
        // });
        UserController.remove(oldUser.id, (result) => {
            // if (!result) {
                // alert("Server declined removing " + oldUser.name);
                this.onGetUsers();
            // }
        })
    }


    onGetUsers() {
        console.log("updating users...");
        this.setState({loading: true,});
        UserController.list((users)=>{
        //     console.log("users: " + users.toString());
            // let newUsers = defaultUsers.map((user) => {
                // user.children = [];
                // return user;
            // });
            if (users instanceof Array)
                this.setState({user: users, loading: false,});
            else this.showError("No users loaded");
        });
    }

    onGetHousesForUser(user) {
        console.log("updating houses for " + user.id);
        // TODO: HouseController.getChildren(userId, (houses)=>{
        HouseController.list(user.id, (houses)=> {
            console.log("houses: " + houses);
            // let users = this.state.users;
            // let user = users.find((user) => {return user.id == userId});
            // console.log("user found: " + !!user);
            user.houses = houses;
            console.log("now he/she has houses: " + user.houses.length);
            this.setState({
                users: this.state.users,
            });
        });

    }

    componentDidMount() {        console.log('componentDidMount');

        // this.onGetUsers();
    }

    render () {
        console.log("UsersList rendering");
        let items=this.state.users.map((user) => {
            user.children = user.houses;
            return user;
        });
        return <div>
            <SmartList items={items}
                       onOpenItem={this.LinkToUserPage}
                       onAddItem={this.onShowAddUserModal}
                       onRemoveItem={this.onRemoveUser}
                       isLoading={this.state.loading}
                       onGetChildren={this.onGetHousesForUser}
                       onOpenChild={this.LinkToHousePage}
                       onAddChild={this.onShowAddHouseModal}
                       onRemoveChild={this.onRemoveHouse}
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
            <AddItemModal title="New place"
                          entity="Place"
                          glyph="house"
                          show={this.state.showAddHouseModal}
                          onHide={this.onHideAddHouseModal}
                          onAdd={this.onAddHouse}
                          btnOk="Create"
                          btnCancel="Cancel"
            />
            <Snackbar open={this.state.showError}
                message={this.state.errorMessage}
                autoHideDuration={4000}
                onRequestClose={()=>this.setState({showError: false})}
            />
        </div>;
    }
}
