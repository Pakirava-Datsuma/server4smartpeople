/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import ReactTimeout from 'react-timeout';
import {Panel, Grid, Button} from 'react-bootstrap';
import ImageWithTooltip from './ImageWithTooltip';

export class ImageList extends React.Component {
    constructor(){
        super();
        this.state={
            updateInterval: 20000,
        };
    }

    defaultProps = {
        imagesSet: "no data or connection...",
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.items !== this.props.items;
    }

    componentDidMount() {
        console.log(this.props.listName+": setting update interval...");
        let intervalId = setInterval(this.props.onItemsUpdate, this.state.updateInterval);
        this.setState({intervalId: intervalId});
        console.log(this.props.listName+": ... have been set");
    }
    componentWillUnmount() {
        console.log(this.props.listName+": update interval clearing...");
        clearInterval(this.state.intervalId);
        console.log(this.props.listName+": ... clearing done");
    }

    render () {
        let imagesSet = <p>No data loaded...</p>;
        if (this.props.items) {
            imagesSet = this.props.items.map((item) =>
                <ImageWithTooltip id={item.id}
                                  url={item.url}
                                  text={item.name}
                                  category={this.props.listName}
                                  onClick={this.props.onClick}
                                  key={item.id}/>)
        }

        let header=<div>
            <h3>{this.props.header}</h3>
            {this.props.children}
        </div>;

        return <Panel header={header}
                      bsStyle={this.props.bsStyle}>
                {imagesSet}
            </Panel>;
    }
}

export var AddButton = (props) => {
    return <Button onClick={props.onClick}
                   bsStyle={props.bsStyle}>+</Button>
}

export var UpdateButton = (props) => {
    return <Button onClick={props.onClick}
                   bsStyle={props.bsStyle}>(O)</Button>
}
