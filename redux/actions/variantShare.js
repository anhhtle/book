import {API_BASE_URL} from 'book/screens/utility/helperFunctions';

// get books available for share
export const getVariantsShare = (token) => dispatch => {
    dispatch(getVariantsShareRequest());

    return fetch(`${API_BASE_URL}/books/community`, 
        {
            headers: {
                "Authorization": `Token ${token}`,
            },
        }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(getVariantsShareSuccess(resJson));
    }).catch(err => {
        console.error(err);
        dispatch(getVariantsShareError(error));
    });
};

export const getVariantsShareRequest = () => (
    {
        type: 'GET_VARIANTS_SHARE_REQUEST'
    }
);

export const getVariantsShareSuccess = (variants_share) => (
    {
        type: 'GET_VARIANTS_SHARE_SUCCESS',
        payload: variants_share
    }
);

export const getVariantsShareError = (error) => (
    {
        type: 'GET_VARIANTS_SHARE_ERROR',
        payload: error
    }
);
