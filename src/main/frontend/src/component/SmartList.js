import React from 'react';
// import {} from 'react-bootstrap';
import SmartItem from './SmartItem';
import {defaultLogos} from './InitialData';

class SmartList extends React.Component {

    static propTypes = {
        items: React.PropTypes.array.isRequired,
        editable: React.PropTypes.bool.isRequired,
        onAddItem: React.PropTypes.func,
        onGetChildren: React.PropTypes.func,
        onRemoveItem: React.PropTypes.func,
        onOpenItem: React.PropTypes.func,
        isLoading: React.PropTypes.bool
    };

    render(){
        console.log("list addButton: " + (this.props.editable ? "1" : "0"));
        let addButton = this.props.editable
            ? <AddButton onAdd={this.props.onAddItem}/> :"";
        console.log("list loadingButton: " + (this.props.isLoading ? "1" : "0"));
        let loadingButton= this.props.isLoading
            ? <LoadButton/> :"";
        let items=[];
        console.log("list items: " + (this.props.items ? "1" : "0"));
        if (this.props.items) {
            if (this.props.editable) {
                items = this.props.items.map(item =>
                    <SmartItem item={item} key={item.id}
                               onOpenItem={this.props.onOpenItem}
                               onGetChildren={this.props.onGetChildren}
                               onRemoveItem={this.props.onRemoveItem}
                    />);
            } else {
                items = this.props.items.map(item =>
                    <SmartItem item={item} key={item.id}/>);
            }

        }

        let className = this.props.editable ? "smart-list-editable" : "smart-list-simple";
        console.log("list class: " + className);
        return <div className={className}>
                {items}
                {loadingButton}
                {addButton}
            </div>;
    }
}

export const AddButton = (props) => {
    console.log("add button: " + (props.onAdd ? "1" : "0"));
    console.log("add button: " + defaultLogos.addButton);
    return <SpecialItem name="Add"
                        logo={defaultLogos.addButton}
                        onDo={props.onAdd}
                        />;
};
export const LoadButton = () => {
    console.log("LoadButton: " + defaultLogos.loadingButton);
    return <SpecialItem name="loading..."
                        logo={defaultLogos.loadingButton}/>;
};
export const SpecialItem = (props) => {
    let item = {name: props.name, photoUrl: props.logo};
    console.log("special item: " + item.toString());
    return <SmartItem item={item}
                      onOpenItem={props.onDo}
                        />;
};


export default SmartList;
