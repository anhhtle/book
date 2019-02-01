import {API_BASE_URL} from 'thebooksjourney/screens/utility/helperFunctions';

// get user's book
export const getVariantsFriend = (token, id) => dispatch => {
    dispatch(getVariantsFriendRequest());

    return fetch(`${API_BASE_URL}/books/friend/${id}`, 
        {
            headers: {
                "Authorization": `Token ${token}`,
            }
        }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(getVariantsFriendSuccess(resJson));
    }).catch(err => {
        console.error(err);
        dispatch(variantsFriendError(error));
    });
};

export const getVariantsFriendRequest = () => (
    {
        type: 'GET_VARIANTS_FRIEND_REQUEST'
    }
);

export const getVariantsFriendSuccess = (variants) => (
    {
        type: 'GET_VARIANTS_FRIEND_SUCCESS',
        payload: variants
    }
);

// error

export const variantsFriendError = (error) => (
    {
        type: 'VARIANTS_FRIEND_ERROR',
        payload: error
    }
);