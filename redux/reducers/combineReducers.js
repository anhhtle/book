import { combineReducers } from 'redux';
import userReducer from './user';
import variantReducer from './variants';

export default combineReducers({
    user: userReducer,
    variants: variantReducer
});
