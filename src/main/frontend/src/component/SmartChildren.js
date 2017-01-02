import React from 'react';
import {Badge, Collapse} from 'react-bootstrap';
import SmartList from './SmartList';
import {defaultUsers} from './InitialData';

class SmartChildren extends React.Component {

    static propTypes = {
        onGetChildren: React.PropTypes.func.isRequired,
    };
    constructor(){
        super();
        this.state = {
            folded: true,
            children: defaultUsers,
            isLoading: true,
        };
        this.onFold.bind(this.onFold());
        // this.onUnfold.bind(this.onUnfold());
    }
    onFold(){
        this.setState({
            folded: !this.state.folded,
        });

        if (this.state.folded) {
            this.setState({
                isLoading: true,
            });
            console.log("updating childrens for " +
                this.props.item.name + " " +
                this.props.id);
            this.setState({
                isLoading: true,
            });

            // UserController.list((children) => {
            //     this.setState({
            //         children: children,
            //         isLoading: false,
            //     })
            // });
        };
    }

    render() {
        let list = <SmartList items={this.state.children}
                              editable={false}/>;
        let childrenCount = <Badge>{this.state.children.count}</Badge>;
        let foldButton = <FoldButton fold={!this.state.folded}/>;

        return <div className="smart-children-tray">
            {childrenCount}
            {foldButton}
            <Collapse in={this.props.folded}>
                {list}
            </Collapse>
        </div>;
    }
};

export const FoldButton = (props) => {
    // TODO: make it float to the right from avatar
    let text = this.props.fold ? "<" : ">";
    return <div className="item-remove-button"
                onClick={this.props.onClick}>
        <Badge>{text}</Badge>
    </div>;
};

export default SmartChildren;
