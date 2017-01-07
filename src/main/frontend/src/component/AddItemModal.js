/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
// import ReactTimeout from 'react-timeout';
// import {ButtonToolbar, Button, Image, Modal, FormGroup, FormControl,
//   ControlLabel, Glyphicon} from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import {CardHeader} from 'material-ui/Card';

export default class AddItemModal extends React.Component {
    static propTypes = {
        show: React.PropTypes.bool.isRequired,
        title: React.PropTypes.string.isRequired,
        onAdd: React.PropTypes.func.isRequired,
        onHide: React.PropTypes.func.isRequired,
        glyph: React.PropTypes.string.isRequired,
    };


    constructor() {
        super();
        this.state = {
            name: "",
            photoUrl: "",
            showConfirmationDialog: false,
        };
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onOk() {
        // alert("sending?");
        // show sending data to server dialog
        // and only after succes you may hide the modal
        let entity = {
            name: this.state.name,
            photoUrl: this.state.photoUrl,
        };
        this.props.onHide();
        this.props.onAdd(entity);
    };

    onCancel() {
        this.props.onHide();
    };

    render() {
        const form = <div>
            <TextField hintText="Name"
                       id="name-text-field"
                       value={this.state.name}
                       onChange={(event) => {
                           this.setState({name: event.target.value})
                       }}/>
            <TextField hintText="Photo"
                       id="photolink-text-field"
                       value={this.state.photoUrl}
                       onChange={(event) => {
                           this.setState({photoUrl: event.target.value})
                       }}/>
        </div>;

        const title = <CardHeader
            title={this.props.title}
            avatar={<Avatar icon={<FontIcon className="material-icons">face</FontIcon>}/>}
        />;
        //    <Glyphicon glyph={this.props.glyph}/>
        //     {this.props.title}

        const actions = <Buttons
            onOk={this.props.onOk}
            onCancel={this.setState({showConfirmationDialog: true}).bind(this)}/>;

        const confirmation = <ConfirmationDialog
            show={this.state.showConfirmationDialog}
            onOk={this.onCancel()}
            onCancel={this.setState({showConfirmationDialog: false}).bind(this)}/>;

        return <Dialog
            title={title}
            actions={actions}
            modal={true}
            open={this.props.show}
            autoScrollBodyContent={true}
        >
            {form}
            {confirmation}
        </Dialog>;
    }
}

const Buttons = (props) => {
    return [
        <FlatButton label="Discard"
                    primary={true}
                    onTouchTap={props.onCancel}
        />,
        <FlatButton label="Submit"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={props.onOk}
        />,
    ];
};

const ConfirmationDialog = (props) => {
    const actions = <Buttons onOk={props.onOk} onCancel={props.onCancel}/>;
    return <Dialog
        title="You will lose this data. Continue?"
        actions={actions}
        modal={true}
        open={props.show}
    />;
}