import {API_BASE_URL} from 'book/screens/utility/helperFunctions';

// *********************** user ****************************
// sign in and get token

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
        dispatch(createFriendRequestError(error));
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

export const createFriendRequestError = (error) => (
    {
        type: 'CREATE_FRIEND_REQUEST_ERROR',
        payload: error
    }
);
