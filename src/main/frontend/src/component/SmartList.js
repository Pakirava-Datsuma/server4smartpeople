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
        let items=[];
        let addButton = this.props.editable
            ? <AddButton onAdd={this.props.onAddItem}/> :"";
        let loadingButton= this.props.isLoading
            ? <LoadButton/> :"";
        if (this.props.items) {
            if (this.props.editable) {
                items = this.props.items.map(item =>
                    <SmartItem item={item} key={item.id}/>);
            } else {
                items = this.props.items.map(item =>
                    <SmartItem item={item} key={item.id}
                               onOpenItem={this.props.onOpenItem}
                               onGetChildren={this.props.onGetChildren}
                               onRemoveItem={this.props.onRemoveItem}
                    />);
            }

        }

        let className = this.props.editable ? "smart-list-editable" : "smart-list-simple";

        return <div className={className}>
                {items}
                {loadingButton}
                {addButton}
            </div>;
    }
}

export const AddButton = (props) => {
    return <SpecialItem name="Add"
                        logo={defaultLogos.AddButton}
                        onDo={props.onAdd}
                        />;
};
export const LoadButton = () => {
    return <SpecialItem name="loading..."
                        logo={defaultLogos.loading}/>;
};
export const SpecialItem = (props) => {
    let item = {name: props.name, photoUrl: props.logo};
    return <SmartItem item={item}
                      onOpenItem={props.onDo}
                        />;
};


export default SmartList;
