/**
 * Created by swanta on 30.11.16.
 */
import React from 'react';
import PageHeader from 'react-bootstrap';

class UserPanel extends React.Component {
    render () {
        return <div>
            <PageHeader>! Username here !</PageHeader>
            {this.props.user}
        </div>;

    };
}

export default UserPanel;