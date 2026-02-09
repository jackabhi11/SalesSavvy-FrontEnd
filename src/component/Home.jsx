import React from 'react'
import "../style/home.css";
import {NavLink, Outlet} from "react-router-dom"
import {ToastContainer} from "react-toastify"

function Home() {
    return (
        <div className='main-div'>
           <ToastContainer position='top-center'/>
           <div className="header">
                <div className='icon-div'>
                    <img src='https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=400x300&vertical=center' alt='icon'/>
                    <h2>Sales Savvy</h2>
                </div>
                <div className='link-div'>
                    <NavLink className="links" to={'/welcomeHome'} >Home</NavLink>
                    <NavLink className="links" to={'/signUp'}>Sign-Up</NavLink>
                    <NavLink className="links" to={'/signIn'} >Sign-In</NavLink>
                   
                </div>
           </div>
           <div className="center">
                <div className="center-content">
                   <Outlet/>
                </div>                
            </div>
            
        </div>
    )
}

export default Home
