/**
 * Created by swanta on 29.11.16.
 */
import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import AdminPanel from './AdminPanel';
import UserPanel from './UserPanel';
import HousePanel from './HousePanel';
import InitialData from './InitialData';

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
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.updateData();
    }

    updateData() {
        this.setState({
            users: InitialData.users,
            houses: InitialData.houses});

    }

    onUserSelect(id){
        browserHistory.push("/user/" + id);
    }

    onUserAdd(){
        this.updateData();
    }

    onHouseSelect(id){
        browserHistory.push("/house/" + id);
    }

    onHouseAdd(){
        this.updateData();
    }

    onUserUpdate(){
        this.updateData();
    }

    onHouseUpdate(){
        this.updateData();
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
                                           onHouseAdd={this.onHouseAdd}/>;
        let userPanelWrapper = (props) => {
            let userId = props.params.id;
            let user = this.state.users.find(user => user.id === userId);
            return <UserPanel user={user}
                              onUserUpdate={this.onUserUpdate}
                              onBack={this.onBack}/>;
        };
        let housePanelWrapper = (props) => {
            let houseId = props.params.id;
            let house = this.state.houses.find(house => house.id === houseId);
            return <HousePanel house={house}
                              onHouseUpdate={this.onHouseUpdate}
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