import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const style = {
    margin: 4,
};

class SmartChild extends React.Component {

    static propTypes = {
        item: React.PropTypes.object.isRequired,
        onRemoveItem: React.PropTypes.func,
        onOpenItem: React.PropTypes.func,
    };

    render() {
        let child = this.props.item;
        return <Chip key={child.id}
                     style={style}
                     onRequestDelete={this.props.onRemoveItem}
                     onTouchTap={this.props.onOpenItem}>
            <Avatar src={child.photoUrl}/>
            {child.name}
        </Chip>;
    }
};

export default SmartChild;
