const INITIAL_STATE = {
    friend_requests: [],
    error: null,
    loading: false
}

export default friendRequestsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // get friend request
        case 'GET_FRIEND_REQUESTS_REQUEST':
            return {...state, loading: true};

        case 'GET_FRIEND_REQUESTS_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false };
            } else {
                if (action.payload.message) {
                    // "message": "Already sent friend request to this user"
                    return {...state, error: action.payload.message, loading: false };
                } else {
                    return {friend_requests: action.payload, error: null, loading: false};
                }
            }

        // create friend request
        case 'CREATE_FRIEND_REQUEST_REQUEST':
            return {...state, loading: true};

        case 'CREATE_FRIEND_REQUEST_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false };
            } else {
                if (action.payload.message) {
                    // "message": "Already sent friend request to this user"
                    return {...state, error: action.payload.message, loading: false };
                } else {
                    const friend_requests = state.friend_requests.slice();
                    friend_requests.push(action.payload);
    
                    return {...state, friend_requests, error: null, loading: false};
                }
            }

        // accept friend request
        case 'ACCEPT_FRIEND_REQUEST_REQUEST':
            return {...state, loading: true};

        case 'ACCEPT_FRIEND_REQUEST_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false };
            } else {
                const accept_friend_requests = state.friend_requests.slice();
                accept_friend_requests.splice(action.payload.index, 1);

                return {...state, friend_requests: accept_friend_requests, error: null, loading: false};
            }

        // delete friend request
        case 'DELETE_FRIEND_REQUEST_REQUEST':
            return {...state, loading: true};

        case 'DELETE_FRIEND_REQUEST_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false };
            } else {
                const delete_friend_requests = state.friend_requests.slice();
                delete_friend_requests.splice(action.payload.index, 1);

                return {...state, friend_requests: delete_friend_requests, error: null, loading: false};
            }

        // seen friend request
        case 'SEEN_FRIEND_REQUESTS_REQUEST':
            return {...state, loading: true};

        case 'SEEN_FRIEND_REQUESTS_SUCCESS':
            if (action.payload.error) {
                return {...state, error: action.payload.error, loading: false };
            } else {
                const seen_friend_requests = [];
                state.friend_requests.map(req => {
                    let seen_req = Object.assign({}, req);
                    seen_req.new = false;
                    seen_friend_requests.push(seen_req);
                })

                return {friend_requests: seen_friend_requests, error: false, loading: false };
            }




        // error
        case 'FRIEND_REQUESTS_ERROR':
            return {...state, error: action.payload.error , loading: false};

        default:
            return state
    }
};
