/**
 * Created by swanta on 30.11.16.
 */
const defaultHouses = [
        {
            id: 0,
            photoUrl: "http://clipartix.com/wp-content/uploads/2016/05/Free-house-clip-art-clipart-clipartcow.gif",
            ownerId: [2],
            name: "test house 1"
        },
        {
            id: 1,
            photoUrl: "http://images.clipartpanda.com/car-20clip-20art-car-clip-art-3.jpg",
            ownerId: [1],
            name: "test house 2"
        },
        {
            id: 2,
            photoUrl: "http://images.clipartpanda.com/car-20clip-20art-eTMdKzKjc.svg",
            ownerId: [2],
            name: "test house 3"
        },
        {
            id: 3,
            photoUrl: "http://worldartsme.com/images/teal-house-clipart-1.jpg",
            ownerId: [0],
            name: "test house 4"
        },
        {
            id: 4,
            photoUrl: "http://dbclipart.com/wp-content/uploads/2016/02/Free-house-clip-art-clipart.png",
            ownerId: [1],
            name: "test place 5"
        },
    ];

const defaultUsers = [
        {
            id: 0,
            photoUrl: "https://upload.wikimedia.org/wikipedia/en/a/a0/ONHS_Eagles_logo.png",
            musicURL: "",
            name: "test user Jake",
            houses: defaultHouses,
        },
        {
            id: 1,
            photoUrl: "https://s-media-cache-ak0.pinimg.com/236x/06/bb/0a/06bb0aab77b49b3a9b5ed41096e495f2.jpg",
            musicURL: "",
            name: "test user Pamela",
            houses: defaultHouses,
        },
        {
            id: 2,
            photoUrl: "https://s-media-cache-ak0.pinimg.com/236x/16/de/5f/16de5f8dd1ffe99f9e169a0605a960b3.jpg",
            musicURL: "",
            name: "test user Robson",
            houses: defaultHouses,
        }
    ];

const defaultLogos = {
    UserLogo: "http://simpleicon.com/wp-content/uploads/add-user.svg",
    HouseLogo: "https://cdn.pixabay.com/photo/2014/04/03/00/38/house-308936_1280.png",

    AddButtonLogo: "http://images.clipartpanda.com/plus-clipart-enki_grey_plus_sign.png",
};

console.log("length users: " + defaultUsers.length);
console.log("length their houses: " + defaultUsers[0].houses.length);
// console.log("array: " + InitialData.defaultUsers.toString());

export {defaultUsers, defaultHouses, defaultLogos};