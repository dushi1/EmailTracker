import { FETCH_USER_LOADING, FETCH_USER_ERROR, FETCH_USER, FETCH_USER_LOGOUT } from '../actions/Auth/AuthTypes'
export default function (state = {
    loading: false,
    error: '',
    data: null
}, action) {
    switch (action.type) {
        case FETCH_USER_LOADING: return {
            loading: true,
            error: '',
            data: null
        }
        case FETCH_USER: return {
            loading: false,
            error: '',
            data: action.payload
        }
        case FETCH_USER_ERROR: return {
            loading: false,
            error: action.payload,
            data: null
        }
        case FETCH_USER_LOGOUT: return {
            loading: false,
            error: '',
            data: null
        }
        default: return state
    }
}