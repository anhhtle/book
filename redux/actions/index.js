const API_BASE_URL = 'https://books-app-server-dev.herokuapp.com/api/v1';

// *********************** user ****************************
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
        dispatch(getUserTokenError(error));
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

export const getUserTokenError = (error) => (
    {
        type: 'GET_USER_TOKEN_ERROR',
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

// variant
export const changeVariantStatus = (index, status) => (
    {
        type: 'CHANGE_VARIANT_STATUS',
        payload: {index, status},
    }
);

export const changeVariantProgress = (index, progress) => (
    {
        type: 'CHANGE_VARIANT_PROGRESS',
        payload: {index, progress},
    }
);