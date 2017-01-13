/**
 * Created by swanta on 30.11.16.
 */
const defaultHouses = [
        {
            id: 0,
            photoURL: "http://clipartix.com/wp-content/uploads/2016/05/Free-house-clip-art-clipart-clipartcow.gif",
            owner: {id: 2},
            name: "test house 1"
        },
        {
            id: 1,
            photoURL: "http://images.clipartpanda.com/car-20clip-20art-car-clip-art-3.jpg",
            owner: {id: 1},
            name: "test house 2"
        },
        {
            id: 2,
            photoURL: "http://images.clipartpanda.com/car-20clip-20art-eTMdKzKjc.svg",
            owner: {id: 2},
            name: "test house 3"
        },
        {
            id: 3,
            photoURL: "http://worldartsme.com/images/teal-house-clipart-1.jpg",
            owner: {id: 0},
            name: "test house 4"
        },
        {
            id: 4,
            photoURL: "http://dbclipart.com/wp-content/uploads/2016/02/Free-house-clip-art-clipart.png",
            owner: {id: 1},
            name: "test place 5"
        },
    ];

function getDefaultHouses(id) {
    console.log("houses for " + id);
    return id < defaultHouses.length
        ? defaultHouses.filter((house) => {
            return house.ownerId == id
            })
        : defaultHouses;
}

const defaultUsers = [
        {
            id: 0,
            photoURL: "https://upload.wikimedia.org/wikipedia/en/a/a0/ONHS_Eagles_logo.png",
            musicURL: "",
            name: "test user Jake",
            houses: getDefaultHouses(0),
        },
        {
            id: 1,
            photoURL: "https://s-media-cache-ak0.pinimg.com/236x/06/bb/0a/06bb0aab77b49b3a9b5ed41096e495f2.jpg",
            musicURL: "",
            name: "test user Pamela",
            houses: getDefaultHouses(1),
        },
        {
            id: 2,
            photoURL: "https://s-media-cache-ak0.pinimg.com/236x/16/de/5f/16de5f8dd1ffe99f9e169a0605a960b3.jpg",
            musicURL: "",
            name: "test user Robson",
            houses: getDefaultHouses(2),
        }
    ];

export {defaultUsers, defaultHouses, getDefaultHouses};