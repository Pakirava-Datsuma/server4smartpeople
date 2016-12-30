/**
 * Created by swanta on 02.12.16.
 */
import React from 'react';
import ImageList from './ImageList';

class HousesList extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "Houses",
            panelStyle: "primary"
        }
    }

    render () {
        let items=[];
        // console.log("1st house image in HousesList: " + this.props.houses[0].photoUrl);
        if (this.props.houses) {
            items=this.props.houses.map((house) => {
                // console.log("house in conversion: " + house.toString());
                return {
                    id: house.id,
                    url: house.photoUrl,
                    name: house.name
                }
            });
        }
        return <ImageList title={this.state.title}
                           items={items}
                           onClick={this.props.onUserSelect}
                           header={this.state.title + ": " + items.length}
                           bsStyle={this.state.panelStyle}
                          onItemsUpdate={this.props.onItemsUpdate}/>;
    }
}
export default HousesList;