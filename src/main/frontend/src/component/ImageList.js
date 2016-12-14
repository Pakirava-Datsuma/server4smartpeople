/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import ReactTimeout from 'react-timeout';
import {Panel,
  Grid, Col, Row,
  Button, ButtonToolbar} from 'react-bootstrap';
import ImageWithTooltip from './ImageWithTooltip';

export const AddButton = (props) => {
    return <Button onClick={props.onClick}
                   bsStyle={props.bsStyle}>+</Button>
}

export const UpdateButton = (props) => {
    return <Button onClick={props.onClick}
                   bsStyle={props.bsStyle}>(O)</Button>
}

export const Buttons = (props) => {
  let buttonAdd;
  let buttonUpdate;
  if (props.buttonAdd)
    buttonAdd=<AddButton onClick={props.onAdd} bsStyle={props.styleAddButton} />;
  if (props.buttonUpdate)
    buttonUpdate=<UpdateButton onClick={props.onUpdate} />;
  return <ButtonToolbar>
              {buttonAdd}{buttonUpdate}
          </ButtonToolbar>
}

export default class ImageList extends React.Component {

    PropTypes() {
      return {
        items: React.PropTypes.array.isRequired,
        onSelect: React.PropTypes.function,
        onAdd: React.PropTypes.function,
        onUpdate: React.PropTypes.function,
      }
    }

    defaultProps = {
        items: "no data or connection...",
        buttonAdd: false,
        buttonUpdate: false,
        updateInterval: 20000,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.items !== this.props.items;
    }

    componentDidMount() {
        // console.log(this.props.title+": setting update interval...");
        // let intervalId = setInterval(this.props.onUpdate, this.props.updateInterval);
        // this.setState({intervalId: intervalId});
        // console.log(this.props.title+": ... have been set");
    }
    componentWillUnmount() {
        // console.log(this.props.title+": update interval clearing...");
        // clearInterval(this.props.intervalId);
        // console.log(this.props.title+": ... clearing done");
        // console.log(this.props.toString());
    }

    render () {
        let imagesSet = <p>No data loaded...</p>;
        if (this.props.items) {
            imagesSet = this.props.items.map((item, id) =>
              <span className="image-list-item">
                  <ImageWithTooltip className="image-tooltip"
                                    id={item.id}
                                    url={item.url}
                                    text={item.name}
                                    category={this.props.title}
                                    onClick={this.props.onSelect}
                                    key={item.id}
                                    responsive
                                    />
              </span>)
        }

        let header=<div><h3>{this.props.title + ": " + imagesSet.length}</h3>
              <Buttons buttonAdd={this.props.buttonAdd}
                        onAdd={this.props.onAdd}
                          styleAddButton={this.props.bsStyle}
                         buttonUpdate={this.props.buttonUpdate}
                         onUpdate={this.props.onUpdate}
                         />
            </div>;

        return <Panel header={header}
                      bsStyle={this.props.bsStyle}>
                {imagesSet}
            </Panel>;
    }
}
