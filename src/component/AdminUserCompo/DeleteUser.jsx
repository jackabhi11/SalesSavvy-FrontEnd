import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function DeleteUser({ userId, onDelete }) {

    const handleClick = () => {
        axios
            .post("http://localhost:8080/removeUser", { userId })
            .then(() => {
                onDelete(userId); 
                toast.success("User deleted");
            })
            .catch(() => toast.error("Error in deleting"));
    };

    return (
        <button className="remove-btn-unique" onClick={handleClick}>
            Remove User
        </button>
    );
}


export default DeleteUser
