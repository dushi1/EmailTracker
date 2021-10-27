import axios from "axios"
import { FETCH_USER, FETCH_USER_ERROR, FETCH_USER_LOADING } from './AuthTypes'

export const fetchUser = () => {
    return function (dispatch) {
        dispatch({ type: FETCH_USER_LOADING })
        axios.get('/api/current').then((res) => {
            dispatch({ type: FETCH_USER, payload: res.data })
        }).catch((er) => {
            dispatch({ type: FETCH_USER_ERROR, payload: er })
        })
    }
}