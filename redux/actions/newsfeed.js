import {API_BASE_URL} from 'thebooksjourney/screens/utility/helperFunctions';

// *********************** user ****************************
// sign in and get token
export const getNewsfeeds = (token) => dispatch => {
    dispatch(getNewsfeedsRequest());

    return fetch(`${API_BASE_URL}/newsfeeds/`, 
        {
            headers: {
                "Authorization": `Token ${token}`,
            },
        }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(getNewsfeedsSuccess(resJson));
    }).catch(err => {
        console.error(err);
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

