import React from 'react';
import {Collapse} from 'react-bootstrap';
import SmartList from './SmartList';

class SmartChildren extends React.Component {

    static propTypes = {
        items: React.PropTypes.arrayOf(React.PropTypes.object.isRequired).isRequired,
        folded: React.PropTypes.bool.isRequired,
    };

    render(){
        return (
            <div className="smart-children-tray">
              <Collapse in={this.props.folded}>
                        <SmartList items={this.props.items}
                                    editable={false} />
              </Collapse>
            </div>)
    }
}

export default SmartChildren;
