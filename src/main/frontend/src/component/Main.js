/**
 * Created by swanta on 29.11.16.
 */
import React from 'react';
import {PageHeader} from 'react-bootstrap';

console.log("Main loading...");

class Main extends React.Component {
    constructor() {
        super();
        console.log("Main created");
    }

    componentWillMount(){console.log("Main mounting...");}

    render () {
        console.log("Main rendering...");
        return (
            <div className="header" margin="2em">
                <PageHeader>#MIA
                    <small>network</small>
                </PageHeader>
                {this.props.children}
            </div>);
    }
}
console.log("Main loaded");

export default Main;