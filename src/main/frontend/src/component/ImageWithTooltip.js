/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import {Tooltip, OverlayTrigger, Image} from 'react-bootstrap';

class ImageWithTooltip extends React.Component {

    render () {
        let tooltip, image, trigger, onClick;

        tooltip = <Tooltip id={this.props.category + this.props.id}>
            {this.props.text}
        </Tooltip>;

        onClick = () => this.props.onClick(this.props.id);

        image =
            <Image className="smallAvatar" src={this.props.url}
                   onClick={onClick}
                   responsive
                   circle
                    />;

        trigger = <OverlayTrigger overlay={tooltip}
                            placement="top"
                            delayShow={0}
                            delayHide={0}>
                {image}
            </OverlayTrigger>;

        return trigger;
    }
}

export default ImageWithTooltip;
