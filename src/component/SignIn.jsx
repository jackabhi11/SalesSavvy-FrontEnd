import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
        .post("http://localhost:8080/signIn", {
            username,
            password
        }).then(res => {
            if(res.data === "User is a valid Admin...") {
                 navigate('/AdminHome', {state:{username}})
                 toast.success(`Admin with name ${username} has been successfully logd in...`)
            } else if(res.data === "User is a valid Customer...") {
                console.log("valid user")
                toast.success(`Customer with username ${username} has been successfully logged in...`)
                 navigate('/CustomerHome')
            } else if(res.data === "Sign In Faill Due To Wrong Password") {
                 toast("Password Is Incorrect. Please Login With Valid Password !")
            } else if(res.data === "Sign In Faill Due To Invalid Username...") {
                 toast("Usernae Is Incorrect. Please Login With Valid Username !")
            }
        }).catch(
           () => toast("Login is rejected By Server. Please Try Again After Some Time")
        )
    }
    return (
            <div className="signin-form">
                <form className="signin-box" onSubmit={handleSubmit}>
                    <h2 className="signin-title">Sign In</h2>

                        <label>Username</label>
                        <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Enter Username"
                        required
                        />


                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
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
