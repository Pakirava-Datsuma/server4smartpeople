/**
 * Created by swanta on 29.11.16.
 */
import React from 'react';
import {PageHeader} from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import {ServerController} from "./ApiList";

let date = new Date();
console.log(date.getHours() + ":" + date.getMinutes());

const onInfo = () => {
    alert("#My Information Assistant's network")
}

const Main = (props) => <div>
    <AppBar title = "#MIA network" onLeftIconButtonTouchTap={onInfo}
            iconElementLeft={<ActionHome style={{margin:11}} color="white"/>}
            iconElementRight={<FlatButton
                label="Create test entities"
                onTouchTap={()=>ServerController.CreateTestEntities((result)=>{
                    alert(result);
                    this.setState({});
                })}/>}/>
    {props.children}
</div>;

console.log("Main loaded");

export default Main;
