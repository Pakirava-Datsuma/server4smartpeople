/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import {Link}                                                                                                                                                                                    from 'react-router';
// import {Panel} from 'react-bootstrap';
import SmartList from './SmartList';
import {UserController, HouseController, ServerController} from './ApiList';
import {defaultUsers, defaultHouses} from './InitialData';
import AddItemModal from './AddItemModal';
import LoadingIndicator from './LoadingIndicator';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';

export default class UsersList extends React.Component {

    constructor() {
        super();
        this.state = {
            users: defaultUsers,
            testing: true,
            showAddUserModal: false,
            showAddHouseModal: false,
            ownerIdOfNewHouse: 0,
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
        this.onAddHouse = this.onAddHouse.bind(this);
        this.onRemoveHouse = this.onRemoveHouse.bind(this);
        this.onShowAddHouseModal = this.onShowAddHouseModal.bind(this);
        this.onHideAddHouseModal = this.onHideAddHouseModal.bind(this);
        this.showError = this.showError.bind(this);
        this.getOwnerOfHouse = this.getOwnerOfHouse.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.getUserIndexInList = this.getUserIndexInList.bind(this);
        this.onGetUser = this.onGetUser.bind(this);
    }

    showError(message) {
        this.setState({
            showError: true,
            errorMessage: message,
            loading: false,
        });
    }

    onShowAddHouseModal(ownerId) {
        console.log("onShowAddHouseModal for " + ownerId);
        this.setState({
            showAddHouseModal: true,
            ownerIdOfNewHouse: ownerId,
        });
    }
    onHideAddHouseModal() {
        console.log("onHideAddHouseModal");
        this.setState({
            showAddHouseModal: false,
        });
    }


    getOwnerOfHouse (house) {
        return this.getUserById(house.ownerId);
    }

    getUserIndexInList(id) {
        return this.state.users.findIndex((user) => {
            return user.id == id;
        });
    }

    getUserById(id) {
        const index = this.getUserIndexInList(id);
        // console.log("index "+index);
        return this.state.users[index];
    }

    onAddHouse(house){
        console.log("onAddHouse " + house.name);
        house.ownerId = this.state.ownerIdOfNewHouse;
        console.log("house.owner " + house.ownerId);

        this.setState({loading: true});
        HouseController.create(house, (newHouse) => {
            console.log("house got: " + newHouse);
            let result = newHouse.id !== undefined;
            if (result || this.state.testing) {
                house.id = result
                    ? newHouse.id
                    : getRandomId();
                let owner = this.getOwnerOfHouse(house);
                if (owner.houses instanceof Array) {
                    owner.houses.push(house)
                } else {
                    owner.houses = [house]
                }
                this.setState({loading: false});
            } else {
                this.showError("Error while creating place \"" + house.name +"\"");
            }
        })
    }

    onRemoveHouse(house){
        console.log("onRemoveHouse " + house.id);
        this.setState({loading: true,});
        let owner = this.getOwnerOfHouse(house);
        HouseController.remove(house.id, (result) => {
            if (result || this.state.testing) {
                let houses = owner.houses;
                houses.splice(houses.indexOf(house), 1);
                this.setState({loading: false,});
            } else {
                this.showError("Can't remove " + house.name + " from " + owner.name);
            }
        })

    }

    onShowAddUserModal() {this.setState({showAddUserModal: true});
        console.log("AddUserModal starting...")}
    onHideAddUserModal() {this.setState({showAddUserModal: false})}

    LinkToUserPage (id) {
        // console.log("LinkToUserPage");
        return <Link to={"/users/" + id}/>;
    }
    LinkToHousePage (id) {
        // console.log("LinkToHousePage");
        return <Link to={"/houses/" + id}/>;
    }

    onGetUser(user) {
        console.log('onGetUser "' + user.name + '"...');
        this.setState({loading: true});
        UserController.get(user.id, (newUser)=>{
            console.log('onGetUser "' + user.name + '" returned ' + newUser);
            let result = newUser.id !== undefined;
            if (result) {
                let users = this.state.users;
                let userIndex = this.getUserIndexInList(user.id);
                users[userIndex] = newUser;
                this.setState({loading: false});
            } else if (!this.state.testing) {
                this.showError("Can't load " + user.name + "'s data");
            } else {
                this.setState({loading: false});
            }
        });
    }
    onAddUser(user) {
        console.log('adding user "' + user.name + '"...');
        this.setState({loading: true});
        UserController.create(user, (newUser) => {
            console.log("user got: " + newUser);
            // console.log("user sent: " + user);
            // user.id = newUser.id;
            // this.setState({
            //     users: this.state.users
            //     loading: false,
            // });
            console.log('adding user "' + user.name + '" returned ' + newUser);
            let result = newUser.id !== undefined;
            if (result || this.state.testing) {
                user.id = result
                    ? newUser.id
                    : getRandomId();
                this.state.users.push(user);
                this.setState({loading: false});
            } else {
                this.showError("Creating user \"" + user.name + "\" error")
            }
        });
    }


    onRemoveUser (oldUser) {
        console.log("removing user " + oldUser.id);
        // this.setState({
        //     users: users,
        //     loading: true,
        // });
        this.setState({loading: true,});
        UserController.remove(oldUser.id, (result) => {
            console.log('removing user finished with "' + result + '"');
            if (result || this.state.testing) {
                // console.log('removing user "' + oldUser.name + '" successed');
                let users = this.state.users;
                users.splice(this.getUserIndexInList(oldUser.id), 1);
                this.setState({loading: false});
            } else {
                // this.onGetUsers();
                // console.log('removing user "' + oldUser.name + '" FAILED');
                this.showError("Server declined removing \"" + oldUser.name + '"');
            }
        })
    }


    onGetUsers() {
        // console.log("updating users...");
        this.setState({loading: true,});
        UserController.list((users)=>{
        //     console.log("users: " + users.toString());
            // let newUsers = defaultUsers.map((user) => {
                // user.children = [];
                // return user;
            // });
            if (users instanceof Array)
                this.setState({users: users, testing: false, loading: false,});
            else {
                this.state.testing = true,
                this.showError("No users loaded. Testing mode...");
            }
        });
    }

    onGetHousesForUser(user) {
        console.log("updating houses for " + user.id);
        this.setState({loading: true});
        HouseController.list(user.id, (houses)=> {
            console.log("houses: " + houses);
            // let users = this.state.users;
            // let user = users.find((user) => {return user.id == userId});
            // console.log("user found: " + !!user);
            let result = houses instanceof Array;
            if (result || this.state.testing) {
                // console.log("now he/she has houses: " + user.houses.length);
                user.houses = result
                    ? houses
                    : defaultHouses;
                this.setState({
                    users: this.state.users,
                    loading: false,
                });
            } else {
                this.showError("No place data loaded");
            }
        });

    }

    componentDidMount() {
        // console.log('componentDidMount');
        this.onGetUsers();
    }

    render () {
        // console.log("UsersList rendering");
        let items=this.state.users.map((user) => {
            user.children = user.houses;
            return user;
        });
        return <div>
            <SmartList items={items}
                       linkToItem={this.LinkToUserPage}
                       onGetItem={this.onGetUser}
                       onAddItem={this.onShowAddUserModal}
                       onRemoveItem={this.onRemoveUser}
                       isLoading={this.state.loading}
                       onGetChildren={this.onGetHousesForUser}
                       linkToChild={this.LinkToHousePage}
                       onAddChild={this.onShowAddHouseModal}
                       onRemoveChild={this.onRemoveHouse}
            />
            <AddItemModal title="New user"
                          entity="User"
                          glyph="user"
                          show={this.state.showAddUserModal}
                          onHide={this.onHideAddUserModal}
                          onAdd={this.onAddUser}
            />
            <AddItemModal title="New place"
                          entity="Place"
                          glyph="house"
                          show={this.state.showAddHouseModal}
                          onHide={this.onHideAddHouseModal}
                          onAdd={this.onAddHouse}
            />
            <Snackbar open={this.state.showError}
                message={this.state.errorMessage}
                autoHideDuration={4000}
                onRequestClose={()=>this.setState({showError: false})}
            />
            <LoadingIndicator visible={this.state.loading}/>
        </div>;
    }
}

function getRandomId () {
    return Math.random()*100000000;
}