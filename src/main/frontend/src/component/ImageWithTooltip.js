/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import {Tooltip, OverlayTrigger, Image} from 'react-bootstrap';

class ImageWithTooltip extends React.Component {

    render () {
      console.log("ImageWithTooltip: " + this.props.text + "\n" + this.props.url);
        let tooltip, image, trigger, onClick;

        tooltip = <Tooltip id={this.props.category + this.props.id}>
            {this.props.text}
        </Tooltip>;

        onClick = () => this.props.onClick(this.props.id);

        image =
            <Image src={this.props.url}
                   onClick={onClick}
                   responsive
                   rounded
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
