/**
 * Created by swanta on 30.11.16.
 */
import React from 'react';
import PageHeader from 'react-bootstrap';

class HousePanel extends React.Component {
    render(){
        return <div>
            <PageHeader>{this.props.house.name}</PageHeader>
            {this.props.house}
        </div>;
    }
}

export default HousePanel;