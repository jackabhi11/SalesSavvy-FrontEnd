import React from 'react'
import {NavLink} from 'react-router-dom'
import { CircleUser, ShoppingCart } from 'lucide-react'

function Navigation() {
    return (
        <div className='navbar_div'>
            <div className='icon_div'>
                 <img src='https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=400x300&vertical=center' alt='icon'/>
                 <h2>Sales Savvy</h2>
            </div>
            <div className="option_div">
                 <NavLink className='option_div_link' to={'Home'}>Home</NavLink>
                 <NavLink className='option_div_link' to={'Products'}>Products</NavLink>
                 <NavLink className='option_div_link' to={'About'}>About</NavLink>
            </div>
            <div className="cart_div">
                <div>
                    <ShoppingCart size={35} color={"rgb(194, 56, 56)"}/>
                </div>
                <div>                    
                    <CircleUser size={35} color={"rgb(140, 6, 140)"}/> 
                </div>
            </div>
        </div>
    )
}

export default Navigation
