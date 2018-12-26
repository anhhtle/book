import {API_BASE_URL} from 'thebooksjourney/screens/utility/helperFunctions';

// *********************** user ****************************
// sign in and get token
export const getAvatars = (token) => dispatch => {
    dispatch(getAvatarsRequest());

    return fetch(`${API_BASE_URL}/avatars/`, 
        {
            headers: {
                "Athorization": `Token ${token}`
            }
        }
    ).then(res => {
        return res.json();
    }).then(avatars => {
        dispatch(getAvatarsSuccess(avatars));
    }).catch(err => {
        console.log(err);
        dispatch(getAvatarsError(error));
    });
};

export const getAvatarsRequest = () => (
    {
        type: 'GET_AVATARS_REQUEST'
    }
);

export const getAvatarsSuccess = (avatars) => (
    {
        type: 'GET_AVATARS_SUCCESS',
        payload: avatars
    }
);

export const getAvatarsError = (error) => (
    {
        type: 'GET_AVATARS_ERROR',
        payload: error
    }
);

