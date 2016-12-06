/**
 * Created by swanta on 30.11.16.
 */
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {UsersList} from './UsersList';
import {HousesList} from './HousesList';
import InitialData from './InitialData';

console.log("adminpanel loading...");
class AdminPanel extends React.Component {
    constructor () {
        super();
        console.log("adminPanel created");
        this.getUsers = this.getUsers.bind(this);
        this.getHouses = this.getHouses.bind(this);
    }

    getUsers() {
        console.log("updating users...");
        this.setState ({ users: InitialData.users });

        // $.get("/users/all", (users)=>{
        //     console.log("...users upated");
        //     this.setState({users: users});
        // });
    }

    getHouses() {
        console.log("updating houses...");
        this.setState({ houses: InitialData.houses });
        // $.get("/places/all", (houses)=>{
        //     console.log("...houses upated");
        //     this.setState({houses: houses});
        // });
    }

    componentDidMount(){
        console.log("AdminPanel mounted");
        this.getUsers();
        this.getHouses();
    }

    render () {
        return <div className="admin-panel">
            <Grid>
                <Row className="adminpanel-gridrow">
                    <Col xs={6} md={4}>
                        <UsersList users={this.state.users}
                                   onItemsUpdate={this.getUsers}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <HousesList houses={this.state.houses}
                                    onItemsUpdate={this.getHouses}/>
                    </Col>
                </Row>
            </Grid>
        </div>;
    }
}
console.log("adminpanel loaded");

export default AdminPanel;