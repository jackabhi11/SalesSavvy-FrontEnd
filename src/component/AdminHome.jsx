import React from 'react'
import "../style/AdminHome.css"
import { CircleUser } from 'lucide-react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { setUserNameToNone } from '../Redux/features/userSlice'

function AdminHome() {

    const userName = useSelector(store => store.user.userName)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(setUserNameToNone())
        localStorage.removeItem("userName")
        navigate("/signIn")
    }

    return (
        <div className='admin-main-div'>
            <ToastContainer position='top-center'/>

            <div className='nav-div'>
                <div className='left-nav-div'>
                    <img
                        src='https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg'
                        alt='icon'
                    />
                    <h2>Sales Savvy</h2>
                </div>

                <div className='right-nav-div'>
                    <NavLink className='link' to="/AdminHome/adminHomeInfo">Home</NavLink>
                    <NavLink className="link" to="/AdminHome/manageUser">Manage User</NavLink>
                    <NavLink className="link" to="/AdminHome/manageProduct">Manage Product</NavLink>

                    <div className='right-nav-div-profile'>
                        {userName && (
                            <div className="log-container">
                                <div className='userinfo-div'>
                                    <CircleUser size={22} color="rgb(140, 6, 140)" />
                                    <span>{userName}</span>
                                </div>

                                <button
                                    className='userinfo-div-btn'
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='admin-panel-div'>
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminHome
