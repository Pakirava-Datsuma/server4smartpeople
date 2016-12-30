import React from 'react';
import {Badge} from 'react-bootstrap';
import SmartChildren from './SmartChildren';
import Avatar from './Avatar';
import InitialData from './InitialData';

class SmartItem extends React.Component {

    static propTypes = {
        item: React.PropTypes.object.isRequired,
        onGetChildren: React.PropTypes.func,
        onRemoveItem: React.PropTypes.func,
        onOpenItem: React.PropTypes.func,
    };

    constructor(){
        super();
        this.state = {
            folded: true,
            children: InitialData.children,
        };
        this.onFold.bind(this.onFold());
    }
    onFold(){
        this.setState({
            folded: !this.state.folded
        });

        console.log("updating childrens for " +
            this.props.item.name + " " +
            this.props.id);
        // UserController.list((children) => {
        //     this.setState({
        //         children: children,
        //     })
        // });
    }
    onClick(){
        if (this.props.onGetChildren) {
            this.onFold();
        }
    }
    onDoubleClick(){
        if (this.props.onOpenItem) {
            this.props.onOpenItem();
        }
    }
    render () {
        let children="", childrenCount="", removeButton="", foldButton="";
      if (this.props.onGetChildren) {
          children = <SmartChildren items={this.state.children}
                                    folded={this.state.folded}/>;
          childrenCount = <Badge>{this.state.children.count}</Badge>;
          foldButton = <FoldButton fold={!this.state.folded}/>;
      }
      if (this.props.onRemoveItem) {
          removeButton = <RemoveButton onClick={this.props.onRemoveItem}/>;
      }

      return <div className="smart-item">
          <Avatar entity={this.props.item}
                  editable={false} />
          {childrenCount}
          {removeButton}
          {foldButton}
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
export const FoldButton = (props) => {
    // TODO: make it float to the right from avatar
    let text = this.props.fold ? "<" : ">";
    return <div className="item-remove-button"
                onClick={this.props.onClick}>
        <Badge>{text}</Badge>
    </div>;
};

export default SmartItem;
