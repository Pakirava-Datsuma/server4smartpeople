/**
 * Created by swanta on 29.11.16.
 */
import React from 'react';
import {PageHeader} from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import {ServerController} from "./ApiList";
import LoadingIndicator from './LoadingIndicator';

let date = new Date();
console.log(date.getHours() + ":" + date.getMinutes());

const onInfo = () => {
    alert("#My Information Assistant's network")
}

const SERVER_SIDE_GENERATING = false;

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            loading: false,
        }
        this.onGenerateEntities = this.onGenerateEntities.bind(this);
    }

    onGenerateEntities(){
        this.setState({loading: true});
        ServerController.CreateTestEntities((placesCount, usersCount) => {
            this.setState({loading: false});
            alert("Created "+ placesCount + " places " +
                "for " + usersCount + " users.\n" +
                "Refresh page please")
        }, SERVER_SIDE_GENERATING);
    }

    render() {
        const testButton = <FlatButton
            label="Create test entities"
            onTouchTap={this.onGenerateEntities}/>;

        const leftIcon = <ActionHome style={{margin: 11}} color="white"/>;

        return <div>
            <AppBar title="#MIA network" onLeftIconButtonTouchTap={onInfo}
                    iconElementLeft={leftIcon}
                    iconElementRight={testButton}/>
            <LoadingIndicator visible={this.state.loading} />
            {this.props.children}
        </div>;
    }
}
console.log("Main loaded");

export default Main;
