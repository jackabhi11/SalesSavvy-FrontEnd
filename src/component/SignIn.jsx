import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserName } from '../Redux/features/userSlice'

function SignIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8080/signIn", {
            username,
            password
        })
        .then(res => {
            if (res.data === "User is a valid Admin...") {

                dispatch(setUserName(username));
                localStorage.setItem("userName", username);
                navigate('/AdminHome');


                toast.success(`Admin ${username} logged in successfully`);
            } 
            else if (res.data === "User is a valid Customer...") {
                toast.success(`Customer ${username} logged in successfully`);
                dispatch(setUserName(username));
                localStorage.setItem("userName", username);
                navigate('/CustomerHome');
            } 
            else {
                toast.error(res.data);
            }
        })
        .catch(() => {
            toast.error("Login rejected by server. Try again later.");
        })
    }

    return (
        <div className="signin-form">
            <form className="signin-box" onSubmit={handleSubmit}>
                <h2 className="signin-title">Sign In</h2>

                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Enter Username"
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                />

                <button type="submit" className="signin-btn">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn
