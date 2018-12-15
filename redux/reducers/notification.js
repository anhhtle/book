const INITIAL_STATE = {
    notifications: [],
    error: null,
    loading: false,
};

export default notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // get newsfeeds
        case 'GET_NOTIFICATIONS_REQUEST':
            return {...state, loading: true};

        case 'GET_NOTIFICATIONS_SUCCESS':
            return {...state, notifications: action.payload, error: null, loading: false};

        // error
        case 'NOTIFICATIONS_ERROR':
            return {...state, error: action.payload, loading: false};

        default:
            return state
    }
};
