import React from 'react';
// import {Tooltip, OverlayTrigger, Image} from 'react-bootstrap';
import SmartList from './SmartList';
// import Avatar from './Avatar';

class SmartChildren extends React.Component {
    constructor(){
        super();
        this.state = {}
      }

    render(){
        if (this.props.folded) {
          let children=onGetChildren();}
        return (
            <div className="smart-children-tray">
              <Button onClick={ ()=> this.setState({ folded: !this.state.folded })}>
                click
              </Button>
              <Collapse in={this.state.open}>
                        <SmartList items=children
                                    editable=false />
              </Collapse>
            </div>)
    }
}

export default SmartChildren;
