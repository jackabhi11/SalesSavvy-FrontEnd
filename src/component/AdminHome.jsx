import React from 'react'
import "../style/AdminHome.css";
import { CircleUser } from 'lucide-react';
import { useLocation, Outlet, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function AdminHome() {

    const location = useLocation();
    const {username} = location.state || {};
    
    return (
        <div className='admin-main-div'>
            <ToastContainer position='top-center'/>
              <div className='nav-div'>
                   <div className='left-nav-div'>
                         <img src='https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=400x300&vertical=center' alt='icon'/>
                        <h2>Sales Savvy</h2>    
                   </div>

                   <div className='right-nav-div'>
                       <NavLink className='link' to={'/AdminHome/adminHomeInfo'}>Home</NavLink>
                       <NavLink className="link" to={'/AdminHome/manageUser'}>Manage User</NavLink>
                       <NavLink className="link" to={'/AdminHome/manageProduct'}>Manage Product</NavLink>
                       <div className='right-nav-div-profile'>                      
                                <CircleUser size={35} color={"rgb(140, 6, 140)"}/>  
                                <span>{username}</span>
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
