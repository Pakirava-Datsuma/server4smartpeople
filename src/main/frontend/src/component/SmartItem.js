import React from 'react';
import SmartList from './SmartList';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardText, CardTitle, CardHeader} from 'material-ui/Card';

const styles = {
    geometry: {
        width: '16em',
        margin: '0.5em',
    },
}

class SmartItem extends React.Component {

    static propTypes = {
        item: React.PropTypes.object.isRequired,
        onGetItem: React.PropTypes.func.isRequired,
        onOpenItem: React.PropTypes.func,
        onRemoveItem: React.PropTypes.func,
        onGetChildren: React.PropTypes.func.isRequired,
        onOpenChild: React.PropTypes.func,
        onAddChild: React.PropTypes.func,
        onRemoveChild: React.PropTypes.func,
    };

    constructor() {
        super();
        this.state = {
            folded: true,
        };
        this.onFold = this.onFold.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onAddChild = this.onAddChild.bind(this);
    };

    onAddChild(){
        // console.log("onAddChild for " + this.props.item.id);
        this.props.onAddChild(this.props.item.id);
    }

    onRemove (){
        this.props.onRemoveItem(this.props.item);
    }

    onFold(expand){
        let fold = !expand;
        // console.log("children " + (fold ? "folding..." : "unfolding..."));
        if (!fold) {
            //this.props.onGetItem(this.props.item);
            this.props.onGetChildren(this.props.item);
        }
        this.setState({
            folded: fold,
        });
    }



    // shouldComponentUpdate (nextProps, nextState) {
    //     return nextState.folded !== this.state.folded
    //         || nextProps.item.name !== this.props.item.name
    //         || nextProps.item.photoURL !== this.props.item.photoURL
    //         || JSON.stringify(nextProps.item.children) !== JSON.stringify(this.props.item.children)
    //         ;
    // }

    render() {
        let item = this.props.item;
        // console.log(item.name);
        return <Card expanded={!this.state.folded} onExpandChange={this.onFold} style={styles.geometry}>
            <CardHeader title={item.name}
                        avatar={item.photoURL}
                        actAsExpander={true} showExpandableButton={true}
                        />
            <CardText expandable={true}>
                <SmartList items={item.children ? item.children : []}
                           linkToItem={this.props.onOpenChild}
                           onGetItem={()=>{}}
                           onAddItem={this.onAddChild}
                           onRemoveItem={this.props.onRemoveChild}
                />
            </CardText>
            <CardActions>
                <FlatButton label="Delete"
                            onTouchTap={this.onRemove}
                            disabled={!this.props.onRemoveItem}/>
                <FlatButton label="Edit"
                            containerElement={this.props.onOpenItem(item.id)}
                            disabled={!this.props.onOpenItem}/>
            </CardActions>
            </Card>
    }
};

export default SmartItem;
