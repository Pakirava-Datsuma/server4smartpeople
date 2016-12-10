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
            <div>
            <div className="header" marginWidth="2em" marginHeight="0.5em">
                <PageHeader>#MIA
                    <small>network</small>
                </PageHeader>
                {/*<Link href="/">View</Link>*/}
                {/*<Link href="simulate">Simulate</Link>*/}
            </div>
                {this.props.children}
            </div>);
    }
}
console.log("Main loaded");

export default Main;