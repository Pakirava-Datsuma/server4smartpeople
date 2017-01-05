import React from 'react';
import SmartList from './SmartList';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardText, CardTitle, CardHeader} from 'material-ui/Card';

class SmartItem extends React.Component {

    static propTypes = {
        item: React.PropTypes.object.isRequired,
        onGetChildren: React.PropTypes.func.isRequired,
        onRemoveItem: React.PropTypes.func,
        onOpenItem: React.PropTypes.func,
    };

    constructor() {
        super();
        this.state = {
            folded: true,
            isLoading: false,
        };
        this.onGetChildren = this.onGetChildren.bind(this);
        this.onFold = this.onFold.bind(this);

    };

    onFold(expand){
        let fold = !expand;
        console.log("children " + (fold ? "folding..." : "unfolding..."));
        this.setState({
            folded: fold,
            isLoading: !fold,
        });
        this.props.onGetChildren();
    }

    onGetChildren(){
        console.log("updating childrens for " +
            this.props.item.name + " / " +
            this.props.item.id);
        this.props.onGetChildren(this.props.item.id);

    }
    // shouldComponentUpdate (nextProps, nextState) {
    //     return nextProps.item != this.props.item
    //         || nextState != this.state;
    // }

    render() {
        let item = this.props.item;
        return <Card expanded={!this.state.folded} onExpandChange={this.onFold}>
            <CardHeader title={item.name}
                        avatar={item.photoUrl}
                        actAsExpander={true} showExpandableButton={true}
                        />
            <CardText expandable={true}>
                <SmartList items={item.children ? item.children : []}
                           isLoading={this.state.isLoading}/>
            </CardText>
            <CardActions>
                <FlatButton label="Delete"
                            onTouchTap={this.props.onRemoveItem}
                            disabled={!this.props.onRemoveItem}/>
                <FlatButton label="Edit"
                            containerElement={this.props.onOpenItem(item.id)}
                            disabled={!this.props.onOpenItem}/>
                <FlatButton label="V"
                            onTouchTap={()=>{
                                console.log("clicked");
                                this.onFold(true)}}/>
                <FlatButton label="^"
                            onTouchTap={()=>{
                                console.log("clicked");
                                this.onFold(false)}}/>
            </CardActions>
            </Card>
    }
};

export default SmartItem;
