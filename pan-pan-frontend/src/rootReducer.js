import { combineReducers } from 'redux';

import flashMessages from './reducers/FlashMessages';
import flashLoading from './reducers/FlashLoading';
import login from './reducers/Login';

export default combineReducers({
    flashMessages,
    flashLoading,
    login
});
