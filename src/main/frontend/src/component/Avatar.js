import React from 'react';
import Avatar from 'material-ui/Avatar';
//TODO:
// - editable property for avatar on entity page to edt it's name
// - single component for classNames

class Avatar extends React.Component {
    static propTypes = {
        entity: React.PropTypes.object.isRequired,
        editable: React.PropTypes.bool.isRequired,
    };

    render() {
        let image =
            <Image src={this.props.entity.photoUrl} />;

        //    TODO:
        // make {title} editable if this.props.editable
        let title = <div className="title">
            {this.props.entity.name}
        </div>;

        return <div className="avatar">
            {image}
            {title}
        </div>
    }
}

export default Avatar;