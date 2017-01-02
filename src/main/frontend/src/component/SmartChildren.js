import React from 'react';
import {Badge, Collapse, Panel} from 'react-bootstrap';
import SmartList from './SmartList';
import {defaultUsers} from './InitialData';

class SmartChildren extends React.Component {

    static propTypes = {
        children: React.PropTypes.array,
        onGetChildren: React.PropTypes.func.isRequired,
    };
    constructor(){
        super();
        this.state = {
            folded: true,
            isLoading: true,
        };
        this.onFold = this.onFold.bind(this);
    }
    onFold(){
        console.log("children " + (this.state.folded ? "unfolding..." : "folding..."));
        this.setState({
            folded: !this.state.folded,
            isLoading: this.state.folded,
        });
        this.props.onGetChildren();
    }

    render() {
        let list = [], childrenCount = "";
        if (this.props.children) {
            console.log("children list");
            list = <SmartList items={this.props.children}
                              editable={false}/>;

            console.log("children count");
            let childrenCount = <Badge>{this.props.children.count}</Badge>;
        };
        console.log("children fold button");
        let foldButton = <FoldButton fold={!this.state.folded}
                                     onFold={this.onFold} />;

        return <div className="smart-children-tray">
            <Collapse in={!this.state.folded}>
                <Panel>
                    {list}
                </Panel>
            </Collapse>
            {foldButton}
            {childrenCount}
        </div>;
    }
};

export const FoldButton = (props) => {
    // TODO: make it float to the right from avatar
    let text = props.fold ? "<" : ">";
    return <div className="item-fold-button">
        <Badge onClick={props.onFold}>{text}</Badge>
    </div>;
};

export default SmartChildren;
