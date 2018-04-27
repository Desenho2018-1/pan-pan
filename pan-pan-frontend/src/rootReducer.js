import { combineReducers } from 'redux';

import flashMessages from './reducers/FlashMessages';
import flashLoading from './reducers/FlashLoading';
import permissionRequired from './reducers/PermissionRequired';

export default combineReducers({
    flashMessages,
    flashLoading,
    permissionRequired
});
