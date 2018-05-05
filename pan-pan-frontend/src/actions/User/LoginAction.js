import axios from 'axios';
import { LOG_IN , LOG_OUT } from '../Types';
import { addFlashLoading } from '../Utils/FlashLoading.js';

export function userLoginRequest(userData) {
    return dispatch => {
        dispatch(addFlashLoading())
        return axios.post('http://localhost:8080/api/users/login', userData);
    }
}

export function login(user) {
    return{
        type: LOG_IN,
        user
    }
}

export function logout() {
    let user = {}
    return {
        type: LOG_OUT,
        user
    }
}
