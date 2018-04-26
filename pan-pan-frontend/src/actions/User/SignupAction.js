import axios from 'axios';
import { addFlashLoading } from '../Utils/FlashLoading.js';


export function userSignupRequest(userData) {
    return dispatch => {
        dispatch(addFlashLoading())
        return axios.post('http://localhost:8080/api/users/', userData);
    }
}
