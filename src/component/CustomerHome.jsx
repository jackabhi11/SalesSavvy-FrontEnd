import React from 'react'
import Navigation from './Customer/Navigation'
import '../style/CustomerHome.css'
import { Outlet } from 'react-router-dom'

function CustomerHome() {
    return (
        <div className='cus_main_div'>
             <div className='navigation_div'>
                <Navigation/>
             </div>
             <div className='content'>
                <Outlet/>
             </div>
        </div>
    )
}

export default CustomerHome
