import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import authReducer from "../reducers/authReducer"


const reducer = combineReducers({
    auth: authReducer
})

const middleware = [thunk]

// const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
// const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store