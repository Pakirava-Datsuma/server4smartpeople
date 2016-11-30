/**
 * Created by swanta on 30.11.16.
 */
class InitialData {
    users() {
        return [
            {
                id: 0,
                photoURL: "https://upload.wikimedia.org/wikipedia/en/a/a0/ONHS_Eagles_logo.png",
                musicURL: ""
            },
            {
                id: 1,
                photoURL: "https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/150/1503/1503352/round-cat-pet-shop-store-logo-template-3-f.png?1469888649",
                musicURL: ""
            },
            {
                id: 2,
                photoURL: "https://s-media-cache-ak0.pinimg.com/236x/16/de/5f/16de5f8dd1ffe99f9e169a0605a960b3.jpg",
                musicURL: ""
            }
        ]
    }
    houses() {
        return [
            {
                id: 0,
                photoURL: "http://clipartix.com/wp-content/uploads/2016/05/Free-house-clip-art-clipart-clipartcow.gif",
                ownerId: [2]
            },
            {
                id: 1,
                photoURL: "http://images.clipartpanda.com/car-20clip-20art-car-clip-art-3.jpg",
                ownerId: [1]
            },
            {
                id: 2,
                photoURL: "http://images.clipartpanda.com/car-20clip-20art-eTMdKzKjc.svg",
                ownerId: [2]
            },
            {
                id: 3,
                photoURL: "http://worldartsme.com/images/teal-house-clipart-1.jpg",
                ownerId: [0]
            },
            {
                id: 4,
                photoURL: "http://dbclipart.com/wp-content/uploads/2016/02/Free-house-clip-art-clipart.png",
                ownerId: [1]
            },
        ]
    }
}

export default InitialData;