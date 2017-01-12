import React from 'react';
// import {} from 'react-bootstrap';
import SmartItem from './SmartItem';
import SmartChild from './SmartChild';
import {defaultLogos} from './InitialData';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
};

class SmartList extends React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired,
        linkToItem: React.PropTypes.func,
        onGetItem: React.PropTypes.func.isRequired,
        onAddItem: React.PropTypes.func,
        onRemoveItem: React.PropTypes.func,
        onGetChildren: React.PropTypes.func,
        linkToChild: React.PropTypes.func,
        onAddChild: React.PropTypes.func,
        onRemoveChild: React.PropTypes.func,
    };

    // shouldComponentUpdate (nextProps) {
    //     return !( nextProps.items.length == this.props.items.length
    //                 && (
    //                         (
    //                             nextProps.items.children
    //                             && nextProps.items.children.length == this.props.items.children.length
    //                         )
    //                         || !nextProps.items.children
    //                     )
    //                 && nextProps.isLoading == this.props.isLoading);
    // }

    render() {
        let items = this.props.items;
        // console.log("list items count: " + items.length);

        let list = (this.props.onGetChildren)
            ? items.map((item) =>
                <SmartItem item={item} key={item.id}
                           onOpenItem={this.props.linkToItem}
                           onGetItem={this.props.onGetItem}
                           onGetChildren={this.props.onGetChildren}
                           onRemoveItem={this.props.onRemoveItem}
                           onOpenChild={this.props.linkToChild}
                           onAddChild={this.props.onAddChild}
                           onRemoveChild={this.props.onRemoveChild}
                />)
            : items.map((child) =>
                <SmartChild key={child.id}
                            item={child}
                            onOpen={this.props.linkToItem}
                            onRemove={this.props.onRemoveItem}
                />);
        if (list.length == 0) list = [
            <NoEntitiesLabel key="NoEntitiesLabel"/>];
        if (this.props.onAddItem) list.push(
            <AddButton key="addButton" onAdd={this.props.onAddItem} isChild={!!this.props.onGetChildren}/>);

        return <div style={style}>
            {list}
        </div>;
    }
}

export class AddButton extends React.Component {
    static style = {
        big: {
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
        },
        small: {
            margin: 0,
            // top: 'auto',
            // right: 0,
            // bottom: 0,
            // left: 'auto',
            // position: 'absolute',
        },
    };
    static propTypes = {
        onAdd: React.PropTypes.func.isRequired,
        isChild: React.PropTypes.bool,
    };
    // shouldComponentUpdate () {return false;}
    render () {

        // console.log("add button: " + !!this.props.onAdd);
        const big = this.props.isChild;
        return <FloatingActionButton style={big ? AddButton.style.big : AddButton.style.small}
                                     mini={!big}>
            <ContentAdd onTouchTap={()=>{console.log("ADD tap");this.props.onAdd()}}/>
        </FloatingActionButton>;
    }
};

export const NoEntitiesLabel = () => <SmartChild item={{name: "No entities yet...",}}/>;


export default SmartList;
