const INITIAL_STATE = {
    address: {
        street: "415  Coelho St",
        city: "Palo Alto",
        state: "Milpitas",
        zipcode: "95035",
        country: "USA"
    },
    alias: "Jamie Lannister",
    job: "King's Guard",
    avatar: {
        _id: "86660871101f2c0e771df8f8",
        name: "The King",
        image: "https://i.pinimg.com/originals/9a/d7/95/9ad79563b7fc172d847a0ddfbd9b2fcc.jpg",
        quote: "The bravest people are the ones who don’t mind looking like cowards.",
        quote_author: "T. H. White",
        lock: "",
        unlocked: "For being brave"
    },
    avatars_unlocked: [
        "86660871101f2c0e771df8f8",
        "c367851d914237495b576e01",
        "f26923e2fa2a74a4ff8a6063"
    ],
    friends: [
    ],
    deleted: false,
    _id: "6b9b152211dcb30675659e05",
    first_name: "Anh",
    last_name: "Le",
    email: "anh.ht.le@gmail.com",
    bookmarks: {
        silver: 2,
        gold: 0
    },
    setting: {
        push_notifications: {
            "book_requests": true,
            "friend_requests": true,
            "book_recommendations": true
        },
        email_notifications: {
            "book_requests": true,
            "news": true
        },
        deleted: false,
        _id: "5bfd02d79892d111045c2ebd"
    },
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaC5odC5sZUBnbWFpbC5jb20iLCJpZCI6IjZiOWIxNTIyMTFkY2IzMDY3NTY1OWUwNSIsImV4cCI6MTU0ODk2NDk4NCwiaWF0IjoxNTQzNzgwOTg0fQ.24IYvapi5PVBpNPOuzjn9EZPb5bLn1AOM_u3i4Wo5lI',
    error: false,
    loading: false
}

export default userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // get login token
        case 'GET_USER_TOKEN_REQUEST':
            return {...state, loading: true};

        case 'GET_USER_TOKEN_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, token: null, loading: false};
            } else {
                return {...state, error: null, token: action.payload.token, loading: false};
            }

        // get current user
        case 'GET_CURRENT_USER_REQUEST':
            return {...state, loading: true};

        case 'GET_CURRENT_USER_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false};
            } else {
                return {...action.payload.user, token: action.payload.token, error: null, loading: false};
            }

        // delete a friend
        case 'DELETE_FRIEND_REQUEST':
            return {...state, loading: true};

        case 'DELETE_FRIEND_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false};
            } else {
                return {...state, error: false, loading: false};
            }

        // update profile
        case 'UPDATE_PROFILE_REQUEST':
            return {...state, loading: true};

        case 'UPDATE_PROFILE_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false};
            } else {
                return {...state, error: false, loading: false};
            }









        // update setting
        case 'UPDATE_SETTING_REQUEST':
            return {...state, loading: true};

        case 'UPDATE_SETTING_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false};
            } else {
                return {...state, setting: action.payload, error: false, loading: false};
            }


        // change user info... not implemented in API yet
            
        case 'CHANGE_USER_INFO':
            const user = Object.assign({}, state);

            user[action.payload.field] = action.payload.value;
            
            return user;

        // change address... not implemented in API yet
            
        case 'CHANGE_USER_ADDRESS':
            const user2 = Object.assign({}, state);

            user2.address[action.payload.field] = action.payload.value;
            
            return user2;


        // error
        case 'USER_ERROR':
            return {...state, error: action.payload.error , loading: false};

        default:
            return state
    }
};
