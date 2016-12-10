/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import ReactTimeout from 'react-timeout';
import {ButtonToolbar, Button, Image, Modal, FormGroup, FormControl,
  ControlLabel} from 'react-bootstrap';
import ImageWithTooltip from './ImageWithTooltip';

export default class AddItemModal extends React.Component {
    constructor(){
        super();
        this.state={
            show: false,
            entity: "this.props.entity",
            logoURL: "this.props.logo",
        };
    }

    defaultProps = {
        show: false,
        entity: "",
        logoURL: "",
    };

    onOk(){
        // show sending data to server dialog
        // and only after succes you may hide the modal
        this.props.onAdd();
        this.props.onHide();
    };

    onCancel(){
        this.props.onHide();
    };
    render () {
        let form = <form>
            <FormGroup controlId="modalName">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" placeHolder="type your name here" />
            </FormGroup>
            <FormGroup controlId="modalImage">
                <ControlLabel>Photo</ControlLabel>
                <FormControl type="URL to photo" placeHolder="paste link to your photo here" />
            </FormGroup>
        </form>;

        let title = <Modal.Title>
            <Image width="15em"
                   margin="1em"
                   src={this.props.logo}
                   rounded />
            {this.props.title}
        </Modal.Title>;

        let buttons = <ButtonToolbar>
            {/*<Button onClick={this.onOK.bind(this)}>{this.props.btnOK}</Button>*/}
            <Button onClick={this.onCancel.bind(this)}>{this.props.btnCancel}</Button>
        </ButtonToolbar>;

        return  <Modal show={this.props.show}
                       onHide={this.props.onHide}
                       onAdd={this.props.onAdd}>
            <Modal.Header closeButton>{title}</Modal.Header>
            <Modal.Body>
                {form}
            </Modal.Body>
            <Modal.Footer>{buttons}</Modal.Footer>
        </Modal>;
    }
}
