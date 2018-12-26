import {API_BASE_URL} from 'thebooksjourney/screens/utility/helperFunctions';

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


// update a variant
export const updateVariant = (token, updateObj) => dispatch => {
    dispatch(updateVariantRequest());

    return fetch(`${API_BASE_URL}/books/`, 
        {
            method: 'PUT',
            headers: {
                "Authorization": `Token ${token}`,
                "Content-type": 'application/json'
            },
            body: JSON.stringify(updateObj)
        }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(updateVariantSuccess(resJson));
    }).catch(err => {
        console.error(err);
        dispatch(variantsError(error));
    });
};

export const updateVariantRequest = () => (
    {
        type: 'UPDATE_VARIANT_REQUEST'
    }
);

export const updateVariantSuccess = (variants) => (
    {
        type: 'UPDATE_VARIANT_SUCCESS',
        payload: variants
    }
);

// delete a variant
export const deleteVariant = (token, id) => dispatch => {
    dispatch(updateVariantRequest());

    return fetch(`${API_BASE_URL}/books/${id}`, 
        {
            method: 'DELETE',
            headers: {
                "Authorization": `Token ${token}`,
            }
        }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(updateVariantSuccess(resJson));
    }).catch(err => {
        console.error(err);
        dispatch(variantsError(error));
    });
};

export const deleteVariantRequest = () => (
    {
        type: 'DELETE_VARIANT_REQUEST'
    }
);

export const deleteVariantSuccess = (variants) => (
    {
        type: 'DELETE_VARIANT_SUCCESS',
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