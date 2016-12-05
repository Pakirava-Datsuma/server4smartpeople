/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import ReactTimeout from 'react-timeout';
import {Panel, Grid} from 'react-bootstrap';
import ImageWithTooltip from './ImageWithTooltip';

class ImageList extends React.Component {
    constructor(){
        super();
        this.state={
            updateInterval: 2
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
        let imagesSet = "set is empty for now...";
        if (this.props.items) {
            imagesSet = this.props.items.map((item) =>
                <ImageWithTooltip id={item.id}
                                  url={item.url}
                                  text={item.name}
                                  category={this.props.listName}
                                  onClick={this.props.onClick}
                                  key={item.id}/>)
        }
        return <Panel header={<h3>{this.props.header}</h3>}
                      bsStyle={this.props.bsStyle}>
                {imagesSet}
            </Panel>;
    }
}

export default ImageList;