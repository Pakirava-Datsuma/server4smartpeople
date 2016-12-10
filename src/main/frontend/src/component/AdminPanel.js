/**
 * Created by swanta on 30.11.16.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import $ from 'jquery';
import UsersList from './UsersList';
import HousesList from './HousesList';
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
    }

    showAddUserModal() {this.setState({showAddUserModal: true})}
    hideAddUserModal() {this.setState({showAddUserModal: false})}
    showAddHouseModal() {this.setState({showAddHouseModal: true})}
    hideAddHouseModal() {this.setState({showAddHouseModal: false})}

    getUsers() {
        console.log("updating users...");

        $.get("/users/all", (users)=>{
            console.log("...users upated");
            this.setState({users: users});
        });
    }

    getHouses() {
        console.log("updating houses...");
        $.get("/places/all", (houses)=>{
            console.log("...houses upated");
            this.setState({houses: houses});
        });
    }

    componentDidMount(){
        console.log("AdminPanel mounted");
        this.getUsers();
        this.getHouses();
    }

    onAddUser() {
        console.log("user added");
        return true;
    }

    onAddHouse() {
        console.log("house added");
        return true;
    }

    render () {
        console.log("adminPanel rendering...");
        return <div className="admin-panel">
            <Grid>
                <Row className="adminpanel-gridrow">
                    <Col xs={6} md={4}>
                        <UsersList users={this.state.users}
                                   onItemsUpdate={this.getUsers}
                                   onAddUser={this.onAddUser.bind(this)}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <HousesList houses={this.state.houses}
                                    onItemsUpdate={this.getHouses}
                                    onAddHouse={this.onAddHouse.bind(this)}/>
                    </Col>
                </Row>
            </Grid>
            <AddItemModal title="New user"
                          entity="User"
                          logo={this.state.userLogo}
                          show={this.state.showAddUserModal}
                          onHide={this.hideAddUserModal.bind(this)}
                          onAdd={this.onAddUser.bind(this)}/>
            <AddItemModal title="New place for smart people"
                          entity="House"
                          logo={this.state.houseLogo}
                          show={this.state.showAddHouseModal}
                          onHide={this.hideAddHouseModal.bind(this)}
                          onAdd={this.onAddHouse.bind(this)}/>
        </div>;
    }
}
console.log("adminpanel loaded");

export default AdminPanel;
