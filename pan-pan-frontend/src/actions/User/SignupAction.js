import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('http://localhost:8080/api/users/', userData);
    }
}
