/**
 * Created by swanta on 30.11.16.
 */
const InitialData = {
    users: [
        {
            id: 0,
            photoURL: "https://upload.wikimedia.org/wikipedia/en/a/a0/ONHS_Eagles_logo.png",
            musicURL: "",
            name: "test user"
        },
        {
            id: 1,
            photoURL: "https://s-media-cache-ak0.pinimg.com/236x/06/bb/0a/06bb0aab77b49b3a9b5ed41096e495f2.jpg",
            musicURL: "",
            name: "test user"
        },
        {
            id: 2,
            photoURL: "https://s-media-cache-ak0.pinimg.com/236x/16/de/5f/16de5f8dd1ffe99f9e169a0605a960b3.jpg",
            musicURL: "",
            name: "test user"
        }
    ],

    houses: [
        {
            id: 0,
            photoURL: "http://clipartix.com/wp-content/uploads/2016/05/Free-house-clip-art-clipart-clipartcow.gif",
            ownerId: [2],
            name: "test place"
        },
        {
            id: 1,
            photoURL: "http://images.clipartpanda.com/car-20clip-20art-car-clip-art-3.jpg",
            ownerId: [1],
            name: "test place"
        },
        {
            id: 2,
            photoURL: "http://images.clipartpanda.com/car-20clip-20art-eTMdKzKjc.svg",
            ownerId: [2],
            name: "test place"
        },
        {
            id: 3,
            photoURL: "http://worldartsme.com/images/teal-house-clipart-1.jpg",
            ownerId: [0],
            name: "test place"
        },
        {
            id: 4,
            photoURL: "http://dbclipart.com/wp-content/uploads/2016/02/Free-house-clip-art-clipart.png",
            ownerId: [1],
            name: "test place"
        },
    ],

    DefaultUserLogoURL: "http://simpleicon.com/wp-content/uploads/add-user.svg",
    DefaultHouseLogoURL: "https://cdn.pixabay.com/photo/2014/04/03/00/38/house-308936_1280.png",
};
// console.log("length: " + InitialData.users.length);
// console.log("array: " + InitialData.users.toString());
export default InitialData;
