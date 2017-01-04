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
            isLoading: true,
        };
        this.onGetChildren = this.onGetChildren.bind(this);
        this.onFold = this.onFold.bind(this);

    };

    onFold(){
        console.log("children " + (this.state.folded ? "unfolding..." : "folding..."));
        this.setState({
            folded: !this.state.folded,
            isLoading: this.state.folded,
        });
        this.props.onGetChildren();
    }

    onGetChildren(){
        console.log("updating childrens for " +
            this.props.item.name + " / " +
            this.props.item.id);
        this.props.onGetChildren(this.props.item.id);

    }

    render() {
        return <Card>
            <CardHeader title={item.name}
                        avatar={item.photoUrl}
                        actAsExpander={true} showExpandableButton={true}
                        />
            <CardText expandable={true}>
                <SmartList items={item.children}
                           isLoading={this.state.isLoading}/>
            </CardText>
            <CardActions>
                <FlatButton label="Delete"
                            onTouchTap={this.props.onRemoveItem}
                            disabled={!this.props.onRemoveItem}/>
                <FlatButton label="Edit"
                            onTouchTap={this.props.onOpenItem}
                            disabled={!this.props.onOpenItem}/>
            </CardActions>
            </Card>
    }
};

export default SmartItem;
