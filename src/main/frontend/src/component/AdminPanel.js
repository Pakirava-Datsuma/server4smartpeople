/**
 * Created by swanta on 30.11.16.
 */
import React from 'react';
import {Panel} from 'react-bootstrap';
import UsersList from './UsersList';
// import HousesList from './HousesList';
// import {defaultLogos, defaultHouses} from './InitialData';

console.log("adminpanel loading...");
class AdminPanel extends React.Component {
    // constructor () {
    //     super();
    //     console.log("adminPanel created");
    //     this.userDefaultPic = "http://clipartix.com/wp-content/uploads/2016/05/Free-house-clip-art-clipart-clipartcow.gif";
    //     this.houseDefaultPic = "http://clipartix.com/wp-content/uploads/2016/05/Free-house-clip-art-clipart-clipartcow.gif";
    //     this.state = {
    //         houses: defaultHouses,
    //         showAddHouseModal: false,
    //         houseLogo: defaultLogos.DefaultHouseLogoURL,
    //         userLogo: defaultLogos.DefaultUserLogoURL,
    //     };
    //     this.onShowAddHouseModal = this.onShowAddHouseModal.bind(this);
    //     this.onHideAddHouseModal = this.onHideAddHouseModal.bind(this);
    // };
    //
    // onShowAddHouseModal() {this.setState({showAddHouseModal: true})}
    // onHideAddHouseModal() {this.setState({showAddHouseModal: false})}
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     let result = (nextState.users !== this.state.users)
    //             ||  (nextState.houses !== this.state.houses);
    //     console.log("adminPanel needs update: " + result);
    //     return result;
    // }
    //
    // componentDidMount(){
    //     console.log("AdminPanel mounted");
    //     // this.onGetUsers();
    //     // this.onGetHousesForUser();
    // }
    //
    // onAddHouse(house) {
    //   let newHouse={
    //     name: house.name,
    //     photoUrl: house.photo,
    //     ownerId: this.state.users[0].id,
    //   };
    //   HouseController.create(newHouse, (newHouse) => {
    //   // console.log(url);
    //       let newHouses = this.state.houses.concat(newHouse);
    //       this.setState({houses: newHouses});
    //       console.log("house added, upd pls");
    //       console.log("house sent: " + house);
    //       console.log("house got: " + newHouse);
    //   });
    //     return true;
    // }

    render () {
        console.log("adminPanel rendering...");
        // let users=[];
        // let houses=[];
        // if (Array.isArray(this.state.users))
        //     users=this.state.users.map((user) => { return {
        //             id: user.id,
        //             url: user.photoUrl == null ? this.userDefaultPic: user.photoUrl,
        //             name: user.name, }});
        // if (Array.isArray(this.state.houses))
        //     houses=this.state.houses.map((house) => { return {
        //             id: house.id,
        //             url: house.photoUrl == null ? this.houseDefaultPic: house.photoUrl,
        //             name: house.name, }});
        // let userList = <UsersList
        //     users={this.state.users}
        //     onAddUser={this.onAddUser}
        //     onOpenUser={User}
        //     buttonAdd
        //     onAdd={this.onShowAddUserModal}
        //     buttonUpdate
        //     {/*onUpdate={this.onGetUsers}*/}
        // {/*/>;*/}
        // let housesList=<ImageList title="Houses"
        //               items={houses}
        //               bsStyle="primary"
        //               onSelect={this.props.onHouseSelect}
        //               buttonAdd
        //               onAdd={this.onShowAddHouseModal}
        //               buttonUpdate
        //               onUpdate={this.onGetHousesForUser}
        //  />;
        //  let modalAddHouse=<AddItemModal title="New place for smart people"
        //                entity="House"
        //                glyph="house"
        //                show={this.state.showAddHouseModal}
        //                onHide={this.onHideAddHouseModal}
        //                onAdd={this.onAddHouse}
        //                btnOk="Create"
        //                btnCancel="Cancel"
        //                />
        //
        return <div>
            <Panel bsStyle="success">
                <UsersList/>
            </Panel>
            {/*{modalAddUser}*/}
            {/*{modalAddHouse}*/}
        </div>;
    }
}
console.log("adminpanel loaded");

export default AdminPanel;
