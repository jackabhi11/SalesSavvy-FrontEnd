import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const resetFormData = () => {
                setUsername("")
                setPassword("")
                setDob("")
                setEmail("")
                setRole("")
                setGender("");
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8080/signUp', {
            username,
            password,
            email,
            dob,
            gender,
            role
        }).then(res => {
            if(res.data === "WebUser has been successfully added...") {
                toast.success(`User with username ${username} has been successfully added...`)
                navigate('/signIn')
            } else if(res.data === "Failed To SignUp Due To Same Username...") {
                toast.success(`User with username ${username} is already in use. Please sign up with valid username...`)
                resetFormData()
            }
        }).catch(()=>toast("There Is An Server issue. Please Try Again After Some Time..."))
    }
    return (
             <div className="form-container">
                <form className="signin-form" onSubmit={handleSubmit}
                method='post'>
                    <h2>Sign Up</h2>
                    <div className="form-grid">
                    <div className="form-left">
                        <label>Username</label>
                        <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={e=>setUsername(e.target.value)}
                        placeholder="Enter Username"
                        required
                        />

                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required
                        />

                        <label>Email</label>
                        <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        placeholder="Enter Email"
                        required
                        />
                    </div>

                    <div className="form-right">
                        <label>Date of Birth</label>
                        <input
                        type="date"
                        name="dob"
                        value={dob}
                        onChange={e=>setDob(e.target.value)}
                        required
                        />

                        <label>Gender</label>
                        <select
                        name="gender"
                        value={gender}
                        onChange={e=>setGender(e.target.value)}
                        required
                        >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        </select>

                        <label>Role</label>
                        <select
                        name="role"
                        value={role}
                        onChange={e=>setRole(e.target.value)}
                        required
                        >
                        <option value="">Select Role</option>
                        <option value="Customer">Customer</option>
                        <option value="Admin">Admin</option>
                        </select>
                    </div>
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
    )
}

export default SignUp
