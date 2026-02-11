import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CircleUser, ShoppingCart } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserNameToNone } from '../../Redux/features/userSlice'

function Navigation() {

    const { userName } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function logout() {
        dispatch(setUserNameToNone())     
        localStorage.removeItem("userName") 
        navigate("/signIn")                    
    }

    return (
        <div className='navbar_div'>
            <div className='icon_div'>
                <img
                    src='https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=400x300&vertical=center'
                    alt='icon'
                />
                <h2>Sales Savvy</h2>
            </div>

            <div className="option_div">
                <NavLink className='option_div_link' to={'Home'}>Home</NavLink>
                <NavLink className='option_div_link' to={'Products'}>Products</NavLink>
                <NavLink className='option_div_link' to={'About'}>About</NavLink>
            </div>

            <div className="cart_div">
                <ShoppingCart size={35} color={"rgb(194, 56, 56)"} />

                <div className="log-container">
                    <div className='userinfo-div'>
                        <CircleUser size={25} color={"rgb(140, 6, 140)"} />
                        <span>{userName}</span>
                    </div>

                    <button
                        className='userinfo-div-btn'
                        onClick={logout} 
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigation
