const INITIAL_STATE = [
    {
        "status": "Requesting",
        "deleted": false,
        "_id": "383217312688a34efd898199",
        "requester": {
            "alias": "Hodor",
            "job": "Holding doors",
            "avatar": {
                "_id": "c367851d914237495b576e01",
                "name": "The Knight",
                "image": "https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg",
                "quote": "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
                "quote_author": "George R.R. Martin",
                "lock": "",
                "unlocked": "For being a reader"
            },
            "_id": "a22bcba0fbc61672285a2e59",
            "first_name": "Edd",
            "last_name": "Lee"
        },
        "requestee": {
            "alias": "Jamie Lannister",
            "job": "King's Guard",
            "avatar": {
                "_id": "86660871101f2c0e771df8f8",
                "name": "The King",
                "image": "https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg",
                "quote": "The bravest people are the ones who don’t mind looking like cowards.",
                "quote_author": "T. H. White",
                "lock": "",
                "unlocked": "For being brave"
            },
            "_id": "6b9b152211dcb30675659e05",
            "first_name": "Anh",
            "last_name": "Le"
        },
        "createdAt": "2018-11-29T09:36:10.175Z",
        "updatedAt": "2018-11-29T09:36:10.175Z"
    },
    {
        "status": "Requesting",
        "deleted": false,
        "_id": "5c00f99052d7a32bc74ef514",
        "requester": {
            "alias": "Jamie Lannister",
            "job": "King's Guard",
            "avatar": {
                "_id": "86660871101f2c0e771df8f8",
                "name": "The King",
                "image": "https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg",
                "quote": "The bravest people are the ones who don’t mind looking like cowards.",
                "quote_author": "T. H. White",
                "lock": "",
                "unlocked": "For being brave"
            },
            "_id": "6b9b152211dcb30675659e05",
            "first_name": "Anh",
            "last_name": "Le"
        },
        "requestee": {
            "alias": "Hodor",
            "job": "Holding doors",
            "avatar": {
                "_id": "c367851d914237495b576e01",
                "name": "The Knight",
                "image": "https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg",
                "quote": "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
                "quote_author": "George R.R. Martin",
                "lock": "",
                "unlocked": "For being a reader"
            },
            // "_id": "6b9b152211dcb30675659e05",
            "_id": "a22bcba0fbc61672285a2e59",
            "first_name": "Edd",
            "last_name": "Lee"
        },
        "createdAt": "2018-11-30T08:49:20.942Z",
        "updatedAt": "2018-11-30T08:49:20.942Z",
    }
];

export default friendRequestsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
};
