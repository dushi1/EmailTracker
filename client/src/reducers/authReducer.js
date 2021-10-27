import { FETCH_USER_LOADING, FETCH_USER_ERROR, FETCH_USER } from '../actions/Auth/AuthTypes'
export default function (state = {
    loading: false,
    error: '',
    data: {}
}, action) {
    switch (action.type) {
        case FETCH_USER_LOADING: return {
            loading: true,
            error: '',
            data: {}
        }
        case FETCH_USER: return {
            loading: false,
            error: '',
            data: action.payload
        }
        case FETCH_USER_ERROR: return {
            loading: false,
            error: action.payload,
            data: {}
        }
        default: return state
    }
}