/**
 * Created by swanta on 30.11.16.
 */
import React from 'react';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';

class AdminPanel extends React.Component {
    render () {
        return <div>
            <PageHeader>#MIA
                <small>network</small>
            </PageHeader>
            <Grid>
                <Row className="adminpanel-gridrow">
                    <Col xs={6} md={4}>Users</Col>
                    <Col xs={6} md={4}>Houses</Col>
                </Row>

                <Row className="adminpanel-gridrow, header">
                    <Col xs={6} md={4}>{this.props.users}</Col>
                    <Col xs={6} md={4}>{this.props.houses}</Col>
                </Row>
            </Grid>
        </div>;
    }
}

export default AdminPanel;