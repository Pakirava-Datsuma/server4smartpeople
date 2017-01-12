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
            photoURL: "",
            showConfirmationDialog: false,
            containsValuableData: false,
        };
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
    }

    onOk() {
        // alert("sending?");
        // show sending data to server dialog
        // and only after succes you may hide the modal
        console.log("ok ");
        let entity = {
            name: this.state.name,
            photoURL: this.state.photoURL,
        };
        this.props.onAdd(entity);
        this.props.onHide();
    };

    onCancel() {
        console.log("cancel ");
        if (this.state.containsValuableData)
            this.setState({showConfirmationDialog: true});
        else this.props.onHide();
    };

    onChangeData(newData) {
        newData.containsValuableData =
            (newData.name!=undefined ? newData.name : this.state.name) != "" ||
            (newData.photoURL!=undefined ? newData.photoURL : this.state.photoURL) != "";
        // console.log("data is valuable: " + newData.containsValuableData);
        this.setState(newData);
    }

    render() {
        const form = <div>
            <TextField hintText="Name"
                       id="name-text-field"
                       value={this.state.name}
                       onChange={(event) => {
                           this.onChangeData({name: event.target.value})
                       }}/>
            <TextField hintText="Photo"
                       id="photolink-text-field"
                       value={this.state.photoURL}
                       onChange={(event) => {
                           this.onChangeData({photoURL: event.target.value})
                       }}/>
        </div>;

        const title = <CardHeader
            title={this.props.title}
            avatar={<Avatar icon={<FontIcon className="material-icons">face</FontIcon>}/>}
        />;
        //    <Glyphicon glyph={this.props.glyph}/>
        //     {this.props.title}

        const actions = [
            <FlatButton
                key="Discard"
                label="Discard"
                primary={true}
                onTouchTap={this.onCancel}
            />,
            <FlatButton
                disabled={!this.state.containsValuableData}
                key="Submit"
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.onOk}
            />,
        ];
        const confirmation = <ConfirmationDialog
            show={this.state.showConfirmationDialog}
            onOk={() => {
                {/*console.log("not confirmed ");*/}
                this.setState({showConfirmationDialog: false});
                this.props.onHide;
            }
            }
            onCancel={() => {
                {/*console.log("not confirmed ");*/}
                this.setState({showConfirmationDialog: false});
            }
            }/>;

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

const ConfirmationDialog = (props) => {
    const actions = [
        <FlatButton
            key="No"
            label="No"
            primary={true}
            keyboardFocused={true}
            onTouchTap={props.onCancel}
        />,
        <FlatButton
            key="Yes"
            label="Yes"
            primary={true}
            onTouchTap={props.onOk}
        />,
    ];
    return <Dialog
        title="You will lose this data. Is it OK?"
        actions={actions}
        modal={true}
        open={props.show}
    />;
};