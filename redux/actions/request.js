import {API_BASE_URL} from 'book/screens/utility/helperFunctions';

// *********************** user ****************************
// get book requests
export const getBookRequests = (token) => dispatch => {
    dispatch(getBookRequestsRequest());

    return fetch(`${API_BASE_URL}/requests/`, 
        {
            headers: {
                "Authorization": `Token ${token}`,
            },
        }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(getBookRequestsSuccess(resJson));
    }).catch(err => {
        console.error(err);
        dispatch(getBookRequestsError(error));
    });
};

export const getBookRequestsRequest = () => (
    {
        type: 'GET_BOOK_REQUESTS_REQUEST'
    }
);

export const getBookRequestsSuccess = (requests) => (
    {
        type: 'GET_BOOK_REQUESTS_SUCCESS',
        payload: requests
    }
);

export const getBookRequestsError = (error) => (
    {
        type: 'GET_BOOK_REQUESTS_ERROR',
        payload: error
    }
);

// update request
export const updateBookRequests = (token, updateObj) => dispatch => {
    dispatch(updateBookRequestsRequest());

    console.log(updateObj);

    return fetch(`${API_BASE_URL}/requests/`, 
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
        dispatch(updateBookRequestsSuccess(resJson));
    }).catch(err => {
        console.error(err);
        dispatch(updateBookRequestsError(error));
    });
};

export const updateBookRequestsRequest = () => (
    {
        type: 'UPDATE_BOOK_REQUESTS_REQUEST'
    }
);

export const updateBookRequestsSuccess = (requests) => (
    {
        type: 'UPDATE_BOOK_REQUESTS_SUCCESS',
        payload: requests
    }
);

export const updateBookRequestsError = (error) => (
    {
        type: 'UPDATE_BOOK_REQUESTS_ERROR',
        payload: error
    }
);

