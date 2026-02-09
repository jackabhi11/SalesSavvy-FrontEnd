import React from 'react'
import {NavLink} from 'react-router-dom'

function AdminHomeInfo() {
    return (
            <div className="adminHomeInfo-div">
            <h1>Hey! Admin 👋</h1>
            <p>Welcome to your panel. From here you can manage products as well as manage users.</p>
                <div className="adminHome-links">
                    <NavLink to='/AdminHome/manageUser'>Manage User</NavLink>
                    <NavLink to='/AdminHome/manageProduct'>Manage Product</NavLink>
                </div>
            </div>

    )
}

export default AdminHomeInfo
