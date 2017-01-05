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
};

class SmartList extends React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired,
        onGetChildren: React.PropTypes.func,
        onAddItem: React.PropTypes.func,
        onRemoveItem: React.PropTypes.func,
        onOpenItem: React.PropTypes.func,
        onOpenChild: React.PropTypes.func,
        isLoading: React.PropTypes.bool.isRequired,
    };

    shouldComponentUpdate (nextProps) {
        return !( nextProps.items == this.props.items
                    && nextProps.isLoading == this.props.isLoading);
    }

    render() {
        let items = this.props.items;
        console.log("list items count: " + items.length);
        let list = (this.props.onGetChildren)
            ? items.map(item =>
                <SmartItem item={item} key={item.id}
                           onOpenItem={this.props.onOpenItem}
                           onGetChildren={this.props.onGetChildren}
                           onRemoveItem={this.props.onRemoveItem}
                />)
            : items.map((child) =>
                <SmartChild key={child.id}
                            item={child}
                            onOpen={this.props.onOpenChild}
                />);

        if (this.props.onAddItem) {
            console.log("list addButton: " + !!this.props.onAddItem);
            list.push(<AddButton key="addButton" onAdd={this.props.onAddItem}/>);
        }

        return <div style={style}>
                {list}
            <LoadingIndicator visible={this.props.isLoading}/>
        </div>;
    }
}

export class AddButton extends React.Component {
    static propTypes = {
        onAdd: React.PropTypes.func.isRequired,
    };
    // shouldComponentUpdate () {return false;}
    render () {
        console.log("add button: " + !!this.props.onAdd);
        return <FloatingActionButton>
            <ContentAdd onTouchTap={this.props.onAdd}/>
        </FloatingActionButton>;
    }
};
export const LoadingIndicator = (props) => {
    console.log("LoadingIndicator: " + props.visible);
    return <RefreshIndicator size={40} left={20} top={0}
                             status={props.visible ? "loading" : "hide"}
    />;
};


export default SmartList;
