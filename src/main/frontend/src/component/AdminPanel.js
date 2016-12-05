/**
 * Created by swanta on 30.11.16.
 */
import React from 'react';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
import UsersList from './UsersList';
import HousesList from './HousesList';

class AdminPanel extends React.Component {
    render () {
        return <div className="admin-panel">
            <PageHeader>{this.props.title}
                <small>{this.props.description}</small>
            </PageHeader>
            <Grid>
                <Row className="adminpanel-gridrow">
                    <Col xs={6} md={4}>
                        <UsersList users={this.props.users}
                                   onItemsUpdate={this.getUsers}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <HousesList houses={this.props.houses}
                                    onItemsUpdate={this.getHouses}/>
                    </Col>
                </Row>
            </Grid>
        </div>;
    }
}

export default AdminPanel;