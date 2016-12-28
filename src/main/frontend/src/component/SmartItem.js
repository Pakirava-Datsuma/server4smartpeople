import React from 'react';
// import {Tooltip, OverlayTrigger, Image} from 'react-bootstrap';
import SmartChildren from './SmartChildren';
import Avatar from './Avatar';

class SmartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            editable: (this.props.onGetChildren == null),
            entity: {},
            folded: true,
        }
    }
    onClick(){
        this.state.folded = !this.state.folded;
    }
    onDoubleClick(){
        this.props.onOpenItem();
    }
    render () {
      console.log(": " + this.props.text + "\n" + this.props.url);
      let className = editable ? "smart-item-editable" : "smart-item-simple";
      let children="", removeButton="";
      if (editable) {
        children = <SmartChildren onGetChildren=this.props.onGetChildren
                      folded={this.state.folded}/>;
        removeButton=<RemoveButton onClick=onRemoveItem/>;
                    }
      return <div className={className}>
          <Avatar entity={entity}
                  edit=false/>
          {children}
          {removeButton}
      </div>
    }
}

export default SmartItem;
