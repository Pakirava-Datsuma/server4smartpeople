/**
 * Created by swanta on 29.11.16.
 */
import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import AdminPanel from './AdminPanel';
import UserPanel from './UserPanel';
import HousePanel from './HousePanel';
import InitialData from './InitialData';
import $ from 'jquery';

class Main extends React.Component {
    constructor () {
        super();
        this.state = {
            users: InitialData.users,
            houses: InitialData.houses
        };
        this.onUserSelect = this.onUserSelect.bind(this);
        this.onUserAdd = this.onUserAdd.bind(this);
        this.onHouseSelect = this.onHouseSelect.bind(this);
        this.onHouseAdd = this.onHouseAdd.bind(this);
        this.onUserUpdate = this.onUserUpdate.bind(this);
        this.onHouseUpdate = this.onHouseUpdate.bind(this);
        this.onBack = this.onBack.bind(this);
        // this.updateData = this.updateData.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.getHouses = this.getHouses.bind(this);
    }

    componentDidMount() {
        // this.updateData();
    }

    getUsers() {
        console.log("updating users...");
        // $.get("/users/all", (users)=>{
        //     console.log("...users upated");
        //     this.setState({users: users});
        // });
    }

    getHouses() {
        console.log("updating houses...");
        // $.get("/places/all", (houses)=>{
        //     console.log("...houses upated");
        //     this.setState({houses: houses});
        // });
    }

    // updateData() {
    //     this.getUsers();
    //     this.getHouses();
    // }

    onUserSelect(id){
        browserHistory.push("/user/" + id);
    }

    onUserAdd(user){
    }

    onHouseSelect(id){
        browserHistory.push("/house/" + id);
    }

    onHouseAdd(){
    }

    onUserUpdate(){
        this.getUsers();
    }

    onHouseUpdate(){
        this.getHouses();
    }

    onBack(){
        browserHistory.push("/");
    }

    render () {
        let adminPanelWrapper = () => <AdminPanel title="#MIA"
                                                  description="network"
                                                  users={this.state.users}
                                                   houses={this.state.houses}
                                                   onUserSelect={this.onUserSelect}
                                                   onUserAdd={this.onUserAdd}
                                                   onHouseSelect={this.onHouseSelect}
                                                   onHouseAdd={this.onHouseAdd}
                                                  getUsers={this.getUsers}
                                                  getHouses={this.getHouses}/>;
        let userPanelWrapper = (props) => {
            let userId = props.params.id;
            let user = this.state.users.find(user => user.id === userId);
            return <UserPanel user={user}
                              onUserAdd={this.onUserAdd}
                              onBack={this.onBack}/>;
        };
        let housePanelWrapper = (props) => {
            let houseId = props.params.id;
            let house = this.state.houses.find(house => house.id === houseId);
            return <HousePanel house={house}
                              onHouseAdd={this.onHouseAdd}
                              onBack={this.onBack}/>;
        };

        return <div>
            <link rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
            <Router history={browserHistory}>
                <Route path="/" component={adminPanelWrapper}/>
                <Route path="/user/:id" component={userPanelWrapper}/>
                <Route path="/house/:id" component={housePanelWrapper}/>
            </Router>
        </div>;
    }
}

export default Main;