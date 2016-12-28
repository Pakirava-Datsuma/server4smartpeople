import React from 'react';
// import {Tooltip, OverlayTrigger, Image} from 'react-bootstrap';
import SmartItem from './SmartItem';
// import Avatar from './Avatar';

class SmartList extends React.Component {
    constructor(){
        super();
        this.state = {}
      }

    render(){
        let items=[];
        if (this.props.items) items = this.props.items.map( entity => {
            if (this.props.editable) {
              item = <SmartItem entity={entity}/>;
            } else {
              item = <SmartItem entity={entity}
                                onOpenItem={this.props.onOpenItem}
                                onGetChildren={this.props.onGetChildren}
                                onRemoveItem={this.props.onRemoveItem}
                                />;
            }
        }
        if (this.props.editable) { items.add(
            <AddButton onClick=this.props.onAddItem />
          );}
        let className = this.props.editable ? "smart-list-editable" : "smart-list-simple";

        return <div className={className}>
                {items}
            </div>
    }
}

export default SmartList;
