/**
 * Created by swanta on 30.11.16.
 */
import {HouseController, UserController} from './ApiList';
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
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
        console.log("updating users...");
        UserController.getAll((users)=>{
            console.log("users: " + users.toString());
            this.setState({users: users});
        });
    }

    getHouses() {
        console.log("updating houses...");
        HouseController.getAll((houses)=>{
          console.log("houses: " + houses);
          this.setState({houses: houses});
        });
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     let result = (nextState.users !== this.state.users)
    //             ||  (nextState.houses !== this.state.houses);
    //     console.log("adminPanel needs update: " + result);
    //     return result;
    // }

    componentDidMount(){
        console.log("AdminPanel mounted");
        // this.getUsers();
        // this.getHouses();
    }

    onAddUser(user) {
      UserController.post(user, (newUser) => {
        let newUsers = this.state.users.concat(newUser);
        this.setState({users: newUsers});
        console.log("user added, upd pls");
        console.log("user sent: " + user);
        console.log("user got: " + newUser);
      });
      return true;
    }

    onAddHouse(house) {
      let data={
        name: house.name,
        photo: house.photo,
        ownerId: this.state.users[0].id,
      };
      HouseController.post(data, (newHouse) => {
      // console.log(url);
          let newHouses = this.state.houses.concat(newHouse);
          this.setState({houses: newHouses});
          console.log("house added, upd pls");
          console.log("house sent: " + house);
          console.log("house got: " + newHouse);
      });
        return true;
    }

    render () {
        console.log("adminPanel rendering...");
        let users=[];
        let houses=[];
        if (Array.isArray(this.state.users))
            users=this.state.users.map((user) => { return {
                    id: user.id,
                    url: user.photoURL,
                    name: user.name, }});
        if (Array.isArray(this.state.houses))
            houses=this.state.houses.map((house) => { return {
                    id: house.id,
                    url: house.photoURL,
                    name: house.name, }});
        let userList=<ImageList title="Users"
                      items={users}
                      bsStyle="success"
                      onSelect={this.props.onUserSelect}
                      buttonAdd
                      onAdd={this.onShowAddUserModal}
                      buttonUpdate
                      onUpdate={this.getUsers}
         />;
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
                    <Col xs={12} md={4}>
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
