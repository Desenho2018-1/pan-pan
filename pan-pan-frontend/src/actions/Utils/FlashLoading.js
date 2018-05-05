import { ADD_FLASH_LOADING, DELETE_FLASH_LOADING } from '../Types';

export function addFlashLoading() {
    const value = true;
    return {
        type: ADD_FLASH_LOADING,
        value
    }
}

export function deleteFlashLoading() {
    const value = false;
    return {
        type: DELETE_FLASH_LOADING,
        value
    }
}
