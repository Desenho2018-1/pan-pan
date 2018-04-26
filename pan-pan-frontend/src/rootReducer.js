import { combineReducers } from 'redux';

import flashMessages from './reducers/FlashMessages';
import flashLoading from './reducers/FlashLoading';

export default combineReducers({
    flashMessages,
    flashLoading
});
