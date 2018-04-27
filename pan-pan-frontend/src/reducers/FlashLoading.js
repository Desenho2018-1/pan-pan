import { ADD_FLASH_LOADING, DELETE_FLASH_LOADING } from '../actions/Types.js';


export default (state = {isLoading: false}, action = {}) => {
    switch (action.type) {
        case ADD_FLASH_LOADING:
            return { isLoading: action.value }

        case DELETE_FLASH_LOADING:
            return { isLoading: action.value }

        default: return state;

    }
}
