import React from 'react';
import {Badge} from 'react-bootstrap';
import SmartChildren from './SmartChildren';
import Avatar from './Avatar';

class SmartItem extends React.Component {

    static propTypes = {
        item: React.PropTypes.object.isRequired,
        onGetChildren: React.PropTypes.func,
        onRemoveItem: React.PropTypes.func,
        onOpenItem: React.PropTypes.func,
    };

    render() {
        let avatar = <Avatar entity={this.props.item}
                             editable={false}/>;
        let removeButton = this.props.onRemoveItem
            ? <RemoveButton onClick={this.props.onRemoveItem}/> : "";
        let children = this.props.onGetChildren
            ? <SmartChildren onGetChildren={this.props.onGetChildren}/> :"";

        return <div className="smart-item">
            {avatar}
            {children}
        </div>
    }
};

export const RemoveButton = (props) => {
    // TODO: make it float above the avatar
    return <div className="item-remove-button"
                onClick={this.props.onRemove}>
        <Badge>x</Badge>
    </div>;
};

export default SmartItem;
