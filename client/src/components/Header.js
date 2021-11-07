import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogout } from '../actions/Auth/AuthActions'

export const Head = () => {
    const Auth = useSelector(state => state.auth.data)
    const dispatch = useDispatch()
    return (
        <div style={{ width: "100%", backgroundColor: "lightblue", padding: '5px' }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1>Email Master</h1>
                <div style={{ display: "flex", gap: '20px' }}>
                    {Auth == null ? <a href='/api/google'>Google Login</a> : <button onClick={() => dispatch(fetchLogout())}>Logout</button>}
                    <a href="/">{Auth == null ? 'Not Logged in' : 'Logged IN'}</a>
                </div>
            </div>
        </div>
    )
}
