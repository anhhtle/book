import {API_BASE_URL} from 'book/screens/utility/helperFunctions';


// get friend requests
export const getFriendRequests = (token, friend_id) => dispatch => {
    dispatch(getFriendRequestsRequest());

    return fetch(`${API_BASE_URL}/friend-requests`, 
    {
        headers: {
            'Authorization': `Token ${token}`,
        }
    }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(getFriendRequestsSuccess(resJson));
    }).catch(err => {
        console.log(err);
        dispatch(friendRequestsError(error));
    });
}

export const getFriendRequestsRequest= () => (
    {
        type: 'GET_FRIEND_REQUESTS_REQUEST'
    }
);

export const getFriendRequestsSuccess = (friend_requests) => (
    {
        type: 'GET_FRIEND_REQUESTS_SUCCESS',
        payload: friend_requests
    }
);

// create friend request
export const createFriendRequest = (token, friend_id) => dispatch => {
    dispatch(createFriendRequestRequest());

    return fetch(`${API_BASE_URL}/friend-requests`, 
    {
        method: 'POST',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({friend_id})
    }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(createFriendRequestSuccess(resJson));
    }).catch(err => {
        console.log(err);
        dispatch(friendRequestError(error));
    });
}

export const createFriendRequestRequest= () => (
    {
        type: 'CREATE_FRIEND_REQUEST_REQUEST'
    }
);

export const createFriendRequestSuccess = (friend_request) => (
    {
        type: 'CREATE_FRIEND_REQUEST_SUCCESS',
        payload: friend_request
    }
);

export const friendRequestsError = (error) => (
    {
        type: 'FRIEND_REQUESTS_ERROR',
        payload: error
    }
);
