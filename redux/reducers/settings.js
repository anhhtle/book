const INITIAL_STATE = {
    push_notifications: {
        book_requests: true,
        friend_requests: true,
        book_recommendations: true
    },
    email_notifications: {
        book_requests: true,
        news: true
    }
};

export default settingssReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
};
