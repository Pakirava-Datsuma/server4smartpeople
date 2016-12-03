/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import {Panel, Grid} from 'react-bootstrap';
import ImageWithTooltip from './ImageWithTooltip';

class ImageList extends React.Component {
    constructor(){
        super();
        this.state = {
            panelHeader: (<h3>listName</h3>)
        }
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
        return <Panel header={this.props.header}
                      bsStyle={this.props.bsStyle}>
                {imagesSet}
            </Panel>;
    }
}

export default ImageList;