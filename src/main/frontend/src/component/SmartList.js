import React from 'react';
// import {} from 'react-bootstrap';
import SmartItem from './SmartItem';
import SmartChild from './SmartChild';
import {defaultLogos} from './InitialData';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
};

class SmartList extends React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired,
        onOpenItem: React.PropTypes.func,
        onAddItem: React.PropTypes.func,
        onRemoveItem: React.PropTypes.func,
        isLoading: React.PropTypes.bool.isRequired,
        onGetChildren: React.PropTypes.func,
        onOpenChild: React.PropTypes.func,
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
        console.log("list items count: " + items.length);
        let addButton = (this.props.onAddItem)
            ? <AddButton key="addButton" onAdd={this.props.onAddItem} isChild={!!this.props.onGetChildren}/>
            : "";
        let refreshIndicator = <LoadingIndicator visible={this.props.isLoading}/>;
        let list = (this.props.onGetChildren)
            ? items.map((item) =>
                <SmartItem item={item} key={item.id}
                           onOpenItem={this.props.onOpenItem}
                           onGetChildren={this.props.onGetChildren}
                           onRemoveItem={this.props.onRemoveItem}
                           onOpenChild={this.props.onOpenChild}
                           onAddChild={this.props.onAddChild}
                           onRemoveChild={this.props.onRemoveChild}
                />)
            : items.map((child) =>
                <SmartChild key={child.id}
                            item={child}
                            onOpen={this.props.onOpenItem}
                            onRemove={this.props.onRemoveItem}
                />);
        if (list.length == 0) list = <NoEntitiesLabel/>;


        return <div style={style}>
            {addButton}
            {refreshIndicator}
            {list}
        </div>;
    }
}

export class AddButton extends React.Component {
    static style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };
    static propTypes = {
        onAdd: React.PropTypes.func.isRequired,
        isChild: React.PropTypes.bool,
    };
    // shouldComponentUpdate () {return false;}
    render () {

        console.log("add button: " + !!this.props.onAdd);
        return (this.props.isChild)
            ?   <FloatingActionButton style={AddButton.style}>
                    <ContentAdd onTouchTap={this.props.onAdd}/>
                </FloatingActionButton>
            :   <SmartChild item={{name: "Add..."}}
                            onOpen={this.props.onAdd}/>;
    }
};
export const LoadingIndicator = (props) => {
    console.log("LoadingIndicator: " + props.visible);
    return <RefreshIndicator size={40} left={-20} top={10}
                             style={{marginLeft: '50%'}}
                             status={props.visible ? "loading" : "hide"}
    />;
};

export const NoEntitiesLabel = () => <SmartChild item={{name: "No entities yet...",}}/>;


export default SmartList;
