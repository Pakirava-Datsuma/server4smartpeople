/**
 * Created by swanta on 30.11.16.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import $ from 'jquery';
// import UsersList from './UsersList';
// import HousesList from './HousesList';
import ImageList from './ImageList';
import InitialData from './InitialData';
import AddItemModal from './AddItemModal';

console.log("adminpanel loading...");
class AdminPanel extends React.Component {
    constructor () {
        super();
        console.log("adminPanel created");
        this.state = {
            houses: InitialData.houses ,
            users: InitialData.users ,
            showAddUserModal: false,
            showAddHouseModal: false,
            userLogo: InitialData.DefaultUserLogoURL,
            houseLogo: InitialData.DefaultHouseLogoURL,
        };
        this.getUsers = this.getUsers.bind(this);
        this.getHouses = this.getHouses.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.onAddHouse = this.onAddHouse.bind(this);
        this.onShowAddUserModal = this.onShowAddUserModal.bind(this);
        this.onHideAddUserModal = this.onHideAddUserModal.bind(this);
        this.onShowAddHouseModal = this.onShowAddHouseModal.bind(this);
        this.onHideAddHouseModal = this.onHideAddHouseModal.bind(this);
    }

    onShowAddUserModal() {this.setState({showAddUserModal: true});
  console.log("AddUserModal starting...")}
    onHideAddUserModal() {this.setState({showAddUserModal: false})}
    onShowAddHouseModal() {this.setState({showAddHouseModal: true})}
    onHideAddHouseModal() {this.setState({showAddHouseModal: false})}

    getUsers() {
        // console.log("updating users...");

        // $.get("/users/all", (users)=>{
            console.log("...users upated");
            // this.setState({users: users});
        // });
    }

    getHouses() {
        // console.log("updating houses...");
        // $.get("/places/all", (houses)=>{
            console.log("...houses upated");
            // this.setState({houses: houses});
        // });
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     let result = (nextState.users !== this.state.users)
    //             ||  (nextState.houses !== this.state.houses);
    //     console.log("adminPanel needs update: " + result);
    //     return result;
    // }

    componentDidMount(){
        console.log("AdminPanel mounted");
        this.getUsers();
        this.getHouses();
    }

    onAddUser(user) {
      let newUsers = this.state.users.concat(user);
      this.setState({users: newUsers});
        console.log("user added");
        return true;
    }

    onAddHouse(house) {
      let newHouses = this.state.houses.concat(house);
      this.setState({houses: newHouses});
        console.log("house added");
        return true;
    }

    render () {
        console.log("adminPanel rendering...");
        let users=this.state.users.map((user) => { return {
                    id: user.id,
                    url: user.photoURL,
                    name: user.name, }});
        let userList=<ImageList title="Users"
                      items={users}
                      bsStyle="success"
                      onSelect={this.props.onUserSelect}
                      buttonAdd
                      onAdd={this.onShowAddUserModal}
                      buttonUpdate
                      onUpdate={this.getUsers}
         />;
        let houses=this.state.houses.map((house) => { return {
                    id: house.id,
                    url: house.photoURL,
                    name: house.name, }});
        let housesList=<ImageList title="Houses"
                      items={houses}
                      bsStyle="primary"
                      onSelect={this.props.onHouseSelect}
                      buttonAdd
                      onAdd={this.onShowAddHouseModal}
                      buttonUpdate
                      onUpdate={this.getHouses}
         />;
         let modalAddUser=<AddItemModal title="New user"
                       entity="User"
                       glyph="user"
                       show={this.state.showAddUserModal}
                       onHide={this.onHideAddUserModal}
                       onAdd={this.onAddUser}
                       btnOk="Create"
                       btnCancel="Cancel"
                       />
         let modalAddHouse=<AddItemModal title="New place for smart people"
                       entity="House"
                       glyph="house"
                       show={this.state.showAddHouseModal}
                       onHide={this.onHideAddHouseModal}
                       onAdd={this.onAddHouse}
                       btnOk="Create"
                       btnCancel="Cancel"
                       />

        return <div className="admin-panel">
            <Grid>
                <Row className="adminpanel-gridrow">
                    <Col xs={6} md={4}>
                        {userList}
                    </Col>
                    <Col xs={6} md={4}>
                        {housesList}
                    </Col>
                </Row>
            </Grid>
            {modalAddUser}
            {modalAddHouse}
        </div>;
    }
}
console.log("adminpanel loaded");

export default AdminPanel;
