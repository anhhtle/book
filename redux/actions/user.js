import {API_BASE_URL} from 'book/screens/utility/helperFunctions';

// *********************** user ****************************
// sign in and get token
export const getUserToken = (loginObj) => dispatch => {
    dispatch(getUserTokenRequest());

    return fetch(`${API_BASE_URL}/user/login`, 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(loginObj)
        }
    ).then(res => {
        return res.json();
    }).then(token => {
        dispatch(getUserTokenSuccess(token));
    }).catch(err => {
        console.log(err);
        dispatch(userError(error));
    });
};

export const getUserTokenRequest = () => (
    {
        type: 'GET_USER_TOKEN_REQUEST'
    }
);

export const getUserTokenSuccess = (token) => (
    {
        type: 'GET_USER_TOKEN_SUCCESS',
        payload: token
    }
);

// get current user
export const getCurrentUser = (token) => dispatch => {
    dispatch(getCurrentUserRequest());

    return fetch(`${API_BASE_URL}/user/current`, 
    {
        method: 'GET',
        headers: {
            'Authorization': `Token ${token}`,
        }
    }
    ).then(res => {
        return res.json();
    }).then(user => {
        dispatch(getCurrentUserSuccess(user, token));
    }).catch(err => {
        console.log(err);
        dispatch(userError(error));
    });
}

export const getCurrentUserRequest = () => (
    {
        type: 'GET_CURRENT_USER_REQUEST'
    }
);

export const getCurrentUserSuccess = (user, token) => (
    {
        type: 'GET_CURRENT_USER_SUCCESS',
        payload: {user, token}
    }
);

export const userError = (error) => (
    {
        type: 'USER_ERROR',
        payload: error
    }
);











export const changeUserInfo = (field, value) => (
    {
        type: 'CHANGE_USER_INFO',
        payload: {field, value}
    }
);

export const changeUserAddress= (field, value) => (
    {
        type: 'CHANGE_USER_ADDRESS',
        payload: {field, value}
    }
);