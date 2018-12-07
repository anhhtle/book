const INITIAL_STATE = {
    friend_requests: [],
    error: null,
    loading: false
}

export default friendRequestsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
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

        case 'CREATE_FRIEND_REQUEST_ERROR':
            return {...state, error: action.payload.error , loading: false};

        default:
            return state
    }
};
