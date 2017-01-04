import React from 'react';
// import {} from 'react-bootstrap';
import SmartItem from './SmartItem';
import SmartChild from './SmartChild';
import {defaultLogos} from './InitialData';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RefreshIndicator from 'material-ui/';
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
        isLoading: React.PropTypes.bool,
    };

    render() {
        console.log("list items count: " + this.props.items.length());
        let items = (this.props.onGetChildren)
            ? this.props.items.map(item =>
                <SmartItem item={item} key={item.id}
                           onOpenItem={this.props.onOpenItem}
                           onGetChildren={this.props.onGetChildren}
                           onRemoveItem={this.props.onRemoveItem}
                />)
            : this.props.children.map((child) =>
                <SmartChild key={child.id}
                           item={child}/>);

        if (this.props.onAddItem) {
            console.log("list addButton: " + (this.props.editable ? "1" : "0"));
            items.push(<AddButton/>);
        }

        let className = this.props.editable ? "smart-list-editable" : "smart-list-simple";
        console.log("list class: " + className);
        return <div className={className} style={style}>
                {items}
            <LoadingIndicator visible={this.state.isLoading}/>
        </div>;
    }
}

export const AddButton = (props) => {
    console.log("add button: " + (props.onAdd ? "1" : "0"));
    return <FloatingActionButton>
        <ContentAdd onTouchTap={props.onAdd} />
        </FloatingActionButton>;
};
export const LoadingIndicator = (props) => {
    console.log("LoadingIndicator: " + defaultLogos.loadingButton);
    return <RefreshIndicator size={40} status={props.visible ? "loading" : "hide"} left="50%" top={0} />;
};


export default SmartList;
