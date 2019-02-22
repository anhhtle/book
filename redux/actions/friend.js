import {API_BASE_URL} from 'thebooksjourney/screens/utility/helperFunctions';


// get friend requests
export const getFriendRequests = (token) => dispatch => {
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


// accept friend request
export const acceptFriendRequest = (token, request_id, index) => dispatch => {
    dispatch(acceptFriendRequestRequest());

    return fetch(`${API_BASE_URL}/friend-requests/accept`, 
    {
        method: 'PUT',
        headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({request_id})
    }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(acceptFriendRequestSuccess(resJson, index));
    }).catch(err => {
        console.log(err);
        dispatch(friendRequestError(error));
    });
}

export const acceptFriendRequestRequest= () => (
    {
        type: 'ACCEPT_FRIEND_REQUEST_REQUEST'
    }
);

export const acceptFriendRequestSuccess = (friend_request, index) => (
    {
        type: 'ACCEPT_FRIEND_REQUEST_SUCCESS',
        payload: {friend_request, index}
    }
);


// delete friend request
export const deleteFriendRequest = (token, id, index) => dispatch => {
    dispatch(deleteFriendRequestRequest());

    return fetch(`${API_BASE_URL}/friend-requests/${id}`, 
    {
        method: 'DELETE',
        headers: {
            'Authorization': `Token ${token}`,
        }
    }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(deleteFriendRequestSuccess(resJson, index));
    }).catch(err => {
        console.log(err);
        dispatch(friendRequestError(error));
    });
}

export const deleteFriendRequestRequest = (friend_request, index) => (
    {
        type: 'DELETE_FRIEND_REQUEST_REQUEST',
        payload: {friend_request, index}
    }
);

export const deleteFriendRequestSuccess = (friend_request) => (
    {
        type: 'DELETE_FRIEND_REQUEST_SUCCESS',
        payload: friend_request
    }
);

// seen friend request
export const seenFriendRequests = (token) => dispatch => {
    dispatch(seenFriendRequestsRequest());

    return fetch(`${API_BASE_URL}/friend-requests/seen`, 
    {
        method: 'PUT',
        headers: {
            'Authorization': `Token ${token}`,
        }
    }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(seenFriendRequestsSuccess(resJson));
    }).catch(err => {
        console.log(err);
        dispatch(friendRequestError(error));
    });
}

export const seenFriendRequestsRequest= () => (
    {
        type: 'SEEN_FRIEND_REQUEST_REQUESTS'
    }
);

export const seenFriendRequestsSuccess = (friend_request) => (
    {
        type: 'SEEN_FRIEND_REQUESTS_SUCCESS',
        payload: friend_request
    }
);

// error
export const friendRequestsError = (error) => (
    {
        type: 'FRIEND_REQUESTS_ERROR',
        payload: error
    }
);