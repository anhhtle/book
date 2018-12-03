const API_BASE_URL = 'https://books-app-server-dev.herokuapp.com/api/v1';

// *********************** user ****************************
// sign in and get token
export const getNewsfeeds = (loginObj) => dispatch => {
    dispatch(getNewsfeedsRequest());

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
        dispatch(getNewsfeedsSuccess(token));
    }).catch(err => {
        console.log(err);
        dispatch(getNewsfeedsError(error));
    });
};

export const getNewsfeedsRequest = () => (
    {
        type: 'GET_NEWSFEEDS_REQUEST'
    }
);

export const getNewsfeedsSuccess = (newsfeeds) => (
    {
        type: 'GET_NEWSFEEDS_SUCCESS',
        payload: newsfeeds
    }
);

export const getNewsfeedsError = (error) => (
    {
        type: 'GET_NEWSFEEDS_ERROR',
        payload: error
    }
);

