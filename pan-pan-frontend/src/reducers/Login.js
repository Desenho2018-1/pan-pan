import { LOG_IN, LOG_OUT } from '../actions/Types.js';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case LOG_IN:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };

        case LOG_OUT:
            return initialState;

        default: return state;
    }
}
