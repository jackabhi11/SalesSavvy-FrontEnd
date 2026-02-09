import React, { useState } from 'react'
import '../style/ManageUser.css'
import ShowAdmin from './AdminUserCompo/ShowAdmin';
import ShowUser from './AdminUserCompo/ShowUser';
import axios from 'axios'
import {toast} from 'react-toastify'

function ManageUser() {
    
    const [role, setRole] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [list, setList] = useState();

    const  handleUser = (role) => {
         setRole(role);
         console.log(role);
         role === "Admin" ? setIsAdmin(true) : setIsAdmin(false)
         console.log(isAdmin);
         axios
         .post("http://localhost:8080/getUser",{
            role
         })
         .then(res => {
            console.log(res.data);
            setList(res.data);
         })
         .catch(err => toast("There is an server issue! Plz try after some time."))
    }

    return (
            <div className="manage-container">
                <h1 className="manage-title">Manage User</h1>

                <div className="button-wrapper">

                    <button
                        className={`manage-btn ${role === "Admin" ? "active-btn" : ""}`}
                        onClick={() => handleUser("Admin")}
                    >
                        Show Admin
                    </button>

                    <button
                        className={`manage-btn ${role === "Customer" ? "active-btn" : ""}`}
                        onClick={() => handleUser("Customer")}
                    >
                        Show Customer
                    </button>

                </div>

                <div className="manage-result">
                    {role === 'Admin' || role === 'Customer' ? 
                        isAdmin ? <ShowAdmin list={list}/> : <ShowUser list={list}/>
                        :
                        <img 
                            className="loading-gif"
                            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzN6bTZvZHJpNXA2M2t4M3d6ODdtejl0ZTBvMWhrYm0waWNzaWN1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZCiL4iAdReHvtH4ZOW/giphy.gif" 
                            alt="gif" 
                        />
                    }
                </div>
            </div>

    )
}

export default ManageUser
