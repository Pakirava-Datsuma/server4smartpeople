import React from 'react';
import {Badge} from 'react-bootstrap';
//TODO:
// - editable property for avatar on entity page to edt it's name
// - single component for classNames
// - badge floats before the image

class Avatar extends React.Component {
    static propTypes = {
        entity: React.PropTypes.object.isRequired,
        editable: React.PropTypes.bool.isRequired,
    };

    render() {
        let className = "avatar-" + this.props.itemLevel;

        // let badge = this.props.info
        //     ? <Badge>{this.props.info} </Badge>
        //     : "";

        let imageWithBadge =
            <Image className="avatar-image"
                   src={this.props.photoUrl}
            >
                {/*{badge}*/}
                {this.props.children}
            </Image>;

        //    TODO:
        // make {title} editable if this.props.editable
        let title = <div className="avatar-title">
            {this.props.entity.name}
        </div>;

        return <div className={className}>
            {imageWithBadge}
            {title}
        </div>
    }
}

export default Avatar;