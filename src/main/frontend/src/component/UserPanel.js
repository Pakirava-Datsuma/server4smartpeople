/**
 * Created by swanta on 30.11.16.
 */
import React from 'react';
import PageHeader from 'react-bootstrap';
import $ from 'jquery';

class UserPanel extends React.Component {
    constructor (props) {
        super();
        this.getUser = this.getUser.bind(this);
    }

    getUser(id) {
        console.log("fetching user " + id);
        $.get("/user/" + id, (user)=>{
            console.log("...user got");
            this.setState({user: user});
        });
    }

    componentDidMount() {
        const id = this.props.params.id;
        this.getUser(id);
    }

    render () {
        return <div>
            <PageHeader>! Username here !</PageHeader>
            {this.state.user}
        </div>;

    };


}

export default UserPanel;