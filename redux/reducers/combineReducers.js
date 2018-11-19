import { combineReducers } from 'redux';
import avatarReducer from './avatar';
import newsfeedReducer from './newsfeed';
import notificationReducer from './notification';
import requestsReducer from './requests';
import settingssReducer from './settings';
import userReducer from './user';
import variantReducer from './variant';
import variantShareReducer from './variantShare';

export default combineReducers({
    avatars: avatarReducer,
    newsfeeds: newsfeedReducer,
    notifications: notificationReducer,
    requests: requestsReducer,
    settings: settingssReducer,
    user: userReducer,
    variants: variantReducer,
    variantShare: variantShareReducer,
});
