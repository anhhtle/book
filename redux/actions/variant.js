import {API_BASE_URL} from 'book/screens/utility/helperFunctions';

// get user's book
export const getVariants = (token) => dispatch => {
    dispatch(getVariantsRequest());

    return fetch(`${API_BASE_URL}/books/`, 
        {
            headers: {
                "Authorization": `Token ${token}`,
            }
        }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(getVariantsSuccess(resJson));
    }).catch(err => {
        console.error(err);
        dispatch(variantsError(error));
    });
};

export const getVariantsRequest = () => (
    {
        type: 'GET_VARIANTS_REQUEST'
    }
);

export const getVariantsSuccess = (variants) => (
    {
        type: 'GET_VARIANTS_SUCCESS',
        payload: variants
    }
);

// error

export const variantsError = (error) => (
    {
        type: 'VARIANTS_ERROR',
        payload: error
    }
);