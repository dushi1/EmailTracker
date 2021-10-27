import React from 'react'

export const Head = () => {
    return (
        <div style={{ width: "100%", backgroundColor: "lightblue", padding: '5px' }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1>Email Master</h1>
                <div style={{ display: "flex", gap: '20px' }}>
                    <a href="/api/google">Google Auth</a>
                    <a href="/api/google">User</a>
                </div>
            </div>
        </div>
    )
}
