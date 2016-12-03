/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import ImageList from './ImageList';

class UsersList extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "Users",
            panelStyle: "success"
        }
    }

    render () {
        let items=[];
        // console.log("1st user image in UsersList: " + this.props.users[0].photoURL);
        if (this.props.users) {
            items=this.props.users.map((user) => {
                // console.log("user in conversion: " + user.toString());
                return {
                    id: user.id,
                    url: user.photoURL,
                    name: user.id
                }
            });
        }
        return <ImageList title={this.state.title}
                          items={items}
                          onClick={this.props.onUserSelect}
                          header={this.state.title + ": " + items.length}
                          bsStyle={this.state.panelStyle}/>;
    }
}
 export default UsersList;