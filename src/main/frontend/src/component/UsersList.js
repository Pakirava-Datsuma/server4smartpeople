/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {ImageList, AddButton, UpdateButton} from './ImageList';

class UsersList extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "Users",
            panelStyle: "success"
        }
    }

    PropTypes() {
      return {
        users: React.PropTypes.array.isRequired,
      }
    }

    render () {
        let items=[];
        console.log(this.props.users.toString());
        // console.log("1st user image in UsersList: " + this.props.users[0].photoURL);
        if (this.props.users.length > 0) {
            items=this.props.users.map((user) => {
                // console.log("user in conversion: " + user.toString());
                return {
                    id: user.id,
                    url: user.photoURL,
                    name: user.name
                }
            });

        }

        let buttons=<ButtonToolbar>
            <AddButton onClick={this.props.onAddUser} bsStyle={this.state.panelStyle} />
            <UpdateButton onClick={this.props.onItemsUpdate} />
        </ButtonToolbar>

        return <ImageList title={this.state.title}
                          items={items}
                          onClick={this.props.onUserSelect}
                          header={this.state.title + ": " + items.length}
                          bsStyle={this.state.panelStyle}
                          onItemsUpdate={this.props.onItemsUpdate}>
            {buttons}
        </ImageList>;
    }
}
 export default UsersList;
