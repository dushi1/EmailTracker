import axios from "axios"
import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_LOADING, FETCH_USER_LOGOUT } from './AuthTypes'

export const fetchUser = () => {
    return function (dispatch) {
        dispatch({ type: FETCH_USER_LOADING })
        axios.get('/api/current').then((res) => {
            if (res.data) {
                dispatch({ type: FETCH_USER, payload: res.data })
            } else {
                dispatch({ type: FETCH_USER_LOGOUT })
            }
        }).catch((er) => {
            console.log(er);
            dispatch({ type: FETCH_USER_ERROR, payload: er })
        })
    }
}

export const fetchLogout = () => {
    return function (dispatch) {
        dispatch({ type: FETCH_USER_LOADING })
        axios.get('/api/logout').then((res) => {
            console.log(res.data)
            dispatch({ type: FETCH_USER_LOGOUT })
        }).catch((er) => {
            console.log(er)
            dispatch({ type: FETCH_USER_ERROR, payload: er })
        })
    }
}