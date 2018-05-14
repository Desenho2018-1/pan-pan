import axios from 'axios';
import { LOG_IN , LOG_OUT } from '../Types';
import { addFlashLoading } from '../Utils/FlashLoading.js';
import createHistory from "history/createBrowserHistory"

export function userLoginRequest(userData) {
    return dispatch => {
        dispatch(addFlashLoading())
        return axios.post('http://localhost:8080/api/users/login', userData);
    }
}

export function login(user){
    return function (dispatch){
        return axios.get('http://localhost:8080/api/users/'+user.id+'/band')
            .then(
                response => {
                    user.band = []
                    user.band.push(response.data)
                    dispatch(setUserSession(user))
                }
            )
            .catch(
                dispatch(setUserSession(user))
            )
    }
}

export function setUserSession(user) {
    return {
        type: LOG_IN,
        user
    }
}

export function logout() {
    const user = {}
    const history = createHistory({forceRefresh: true})

    history.push('/user/login')

    return {
        type: LOG_OUT,
        user
    }
}
