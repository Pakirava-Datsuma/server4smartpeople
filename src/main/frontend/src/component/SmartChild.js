import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

const style = {
    margin: 4,
};

class SmartChild extends React.Component {

    static propTypes = {
        item: React.PropTypes.object.isRequired,
        onRemove: React.PropTypes.func,
        onOpen: React.PropTypes.func,
    };

    constructor(){
        super();
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove (){
        this.props.onRemove(this.props.item);
    }

    render() {
        const child = this.props.item;
        const avatar = child.photoURL
            ? <Avatar src={child.photoURL}/>
            : <Avatar icon={<FontIcon className="material-icons">face</FontIcon>}/>;
        const link = this.props.onOpen ? this.props.onOpen(child.id) : "";
        return <Chip style={style}
                     onRequestDelete={this.props.onRemove ? this.onRemove : undefined}
                     containerElement={link}
        >
            {avatar}
            {child.name}
        </Chip>;
    }
};

export default SmartChild;
