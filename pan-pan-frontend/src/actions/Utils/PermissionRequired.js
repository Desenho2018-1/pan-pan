import { LOG_IN ,LOG_OUT } from '../Types';

export function login() {
    console.log('hheree');
    const value = true;
    return {
        type: LOG_IN,
        value
    }
}

export function logout(id) {
    const value = false;
    return {
        type: LOG_OUT,
        value
    }
}
