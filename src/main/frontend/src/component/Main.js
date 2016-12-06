/**
 * Created by swanta on 29.11.16.
 */
import React from 'react';
import {PageHeader} from 'react-bootstrap';

class Main extends React.Component {
    render () {
        return (
            <div className="header" margin="2em">
                <PageHeader>#MIA
                    <small>network</small>
                </PageHeader>
                {this.props.children}
            </div>);
    }
}

export default Main;