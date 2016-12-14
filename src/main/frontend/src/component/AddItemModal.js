/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import ReactTimeout from 'react-timeout';
import {ButtonToolbar, Button, Image, Modal, FormGroup, FormControl,
  ControlLabel, Glyphicon} from 'react-bootstrap';
import ImageWithTooltip from './ImageWithTooltip';

export default class AddItemModal extends React.Component {
    constructor(){
        super();
        this.state={
          name: "",
          photo: "",
        };
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    defaultProps = {
        show: false,
        entity: "something",
        glyph: "info-sign",
    };

    onOk(){
      // alert("sending?");
        // show sending data to server dialog
        // and only after succes you may hide the modal
        let entity={
          name: this.state.name,
          photo: this.state.photo,
        };
        if (this.props.onAdd(entity))
            this.props.onHide();
    };

    onCancel(){
        this.props.onHide();
    };
    render () {
        let form = <form>
            <FormGroup controlId="modalName">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" placeholder="type your name here"
                      onChange={(event) => {this.setState({name: event.target.value})}}/>
            </FormGroup>
            <FormGroup controlId="modalImage">
                <ControlLabel>Photo</ControlLabel>
                <FormControl type="URL to photo" placeholder="paste link to your photo here"
                      onChange={(event) => {this.setState({photo: event.target.value})}}/>
            </FormGroup>
        </form>;

        let title = <Modal.Title>
            <Glyphicon glyph={this.props.glyph}/>
            {this.props.title}
        </Modal.Title>;

        let buttons =
        // <ButtonToolbar>
            <Button block onClick={this.onOk}>
              <Glyphicon glyph="ok" />
              {this.props.btnOk}
              </Button>
            // <Button onClick={this.onCancel}>{this.props.btnCancel}</Button>
        // </ButtonToolbar>
        ;

        return  <Modal show={this.props.show}
                       onHide={this.props.onHide}
                       keyboard
                       >
            <Modal.Header onHide={this.props.onHide}
                          closeButton>
                {title}
            </Modal.Header>
            <Modal.Body>
                {form}
            </Modal.Body>
            <Modal.Footer>{buttons}</Modal.Footer>
        </Modal>;
    }
}
