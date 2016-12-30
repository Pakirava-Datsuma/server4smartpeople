import React from 'react';
// import {} from 'react-bootstrap';
import SmartItem from './SmartItem';
import InitialData from './InitialData';

class SmartList extends React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired,
        editable: React.PropTypes.bool.isRequired,
        onAddItem: React.PropTypes.func,
        onGetChildren: React.PropTypes.func,
        onRemoveItem: React.PropTypes.func,
        onOpenItem: React.PropTypes.func,
    };

    render(){
        let items=[];
        if (this.props.items) {
            if (this.props.editable) {
                items = this.props.items.map(item =>
                    <SmartItem item={item}/>);
                items.add(
                    <AddButton onAdd={this.props.onAddItem} />);
            } else {
                items = this.props.items.map(item =>
                    <SmartItem item={item}
                               onOpenItem={this.props.onOpenItem}
                               onGetChildren={this.props.onGetChildren}
                               onRemoveItem={this.props.onRemoveItem}
                    />);
            }
        }

        let className = this.props.editable ? "smart-list-editable" : "smart-list-simple";

        return <div className={className}>
                {items}
            </div>;
    }
}

export const AddButton = (props) => {
    let item = {name: "New User", photoUrl: InitialData.AddButtonLogo};
    return <SmartItem item={item}
                      onOpenItem={this.props.onAdd}
                        />;
};
export default SmartList;
