import {API_BASE_URL} from 'book/screens/utility/helperFunctions';

export const getNotifications = (token) => dispatch => {
    dispatch(getNotificationsRequest());

    return fetch(`${API_BASE_URL}/notifications/`, 
        {
            headers: {
                "Authorization": `Token ${token}`,
            },
        }
    ).then(res => {
        return res.json();
    }).then(resJson => {
        dispatch(getNotificationsSuccess(resJson));
    }).catch(err => {
        console.error(err);
        dispatch(notificationsError(error));
    });
};

export const getNotificationsRequest = () => (
    {
        type: 'GET_NOTIFICATIONS_REQUEST'
    }
);

export const getNotificationsSuccess = (notifications) => (
    {
        type: 'GET_NOTIFICATIONS_SUCCESS',
        payload: notifications
    }
);

export const notificationsError = (error) => (
    {
        type: 'NOTIFICATIONS_ERROR',
        payload: error
    }
);

