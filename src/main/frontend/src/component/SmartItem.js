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

    constructor() {
        super();
        this.onGetChildren = this.onGetChildren.bind(this);
    };

    onGetChildren(){
        console.log("updating childrens for " +
            this.props.item.name + " / " +
            this.props.item.id);
        this.props.onGetChildren(this.props.item.id);

    }

    render() {
        console.log("item avatar");
        let avatar = <Avatar entity={this.props.item}
                             editable={false}/>;
        let removeButton = this.props.onRemoveItem
            ? <RemoveButton onClick={this.props.onRemoveItem}/> : "";
        console.log("item children: " + (this.props.onGetChildren ? "1" : "0"));
        let children = this.props.onGetChildren
            ? <SmartChildren children={this.props.item.children}
                             onGetChildren={this.onGetChildren}/> :"";

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
