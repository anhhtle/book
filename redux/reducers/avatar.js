const INITIAL_STATE = {
    avatars: [
        {
            "_id": "86660871101f2c0e771df8f8",
            "name": "The King",
            "image": "https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg",
            "quote": "The bravest people are the ones who don\u2019t mind looking like cowards.",
            "quote_author": "T. H. White",
            "lock": "",
            "unlocked": "For being brave"
        },
        {
            "_id": "c367851d914237495b576e01",
            "name": "The Knight",
            "image": "https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg",
            "quote": "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
            "quote_author": "George R.R. Martin",
            "lock": "",
            "unlocked": "For being a reader"
        },
        {
            "_id": "f26923e2fa2a74a4ff8a6063",
            "name": "The Wizard",
            "image": "https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg",
            "quote": "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
            "quote_author": "J. K. Rowling",
            "lock": "",
            "unlocked": "For being creative"
        }
    ]
};

export default avatarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // get all avatars
        case 'GET_AVATARS_REQUEST':
            return {...state};

        case 'GET_AVATARS_SUCCESS':
            return {...state, avatars: action.payload, loading: false };

        case 'GET_AVATARS_ERROR':
            return {...state, error: action.payload.error , loading: false};

        default:
            return state
    }
};
