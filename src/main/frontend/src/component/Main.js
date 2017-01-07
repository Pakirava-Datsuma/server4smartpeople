/**
 * Created by swanta on 29.11.16.
 */
import React from 'react';
import {PageHeader} from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';

let date = new Date();
console.log(date.getHours() + ":" + date.getMinutes());

const onInfo = () => {
    alert("#My Information Assistant's network")
}

const Main = (props) => <div>
    <AppBar title = "#MIA network" onLeftIconButtonTouchTap={onInfo}/>
    {props.children}
</div>;

console.log("Main loaded");

export default Main;
