import React from 'react';
import Avatar from 'material-ui/Avatar';
//TODO:
// - editable property for avatar on entity page to edt it's name
// - single component for classNames

class SmartAvatar extends React.Component {
    static propTypes = {
        entity: React.PropTypes.object.isRequired,
        onTitleChange: React.PropTypes.func,
    };

    render() {
        let avatar =
            <Avatar src={this.props.entity.photoURL} />;

        let title;
        if (this.props.onTitleChange) {
            title = <TextField rows={1} rowsMax={2}
                                   hintText="Name"
                                   defaultValue={this.props.entity.name}
            />;
        } else {
            title = this.props.entity.name;
        }

        return <List>
            <ListItem leftAvatar={avatar}>
                {title}
            </ListItem>
        </List>

    }
}

export default SmartAvatar;