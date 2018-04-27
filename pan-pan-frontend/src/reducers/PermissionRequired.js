import { LOG_IN, LOG_OUT } from '../actions/Types.js';


export default (state = {isLoggedIn: false}, action = {}) => {
    switch (action.type) {
        case LOG_IN:
            return { isLoggedIn: action.value }

        case LOG_OUT:
            return { isLoggedIn: action.value }

        default: return state;

    }
}
