import React from 'react'
import DeleteUser from './DeleteUser';

function UserCard({ user, onDelete }) {
    return (
        <div className="user-card-unique">
            <div className="user-accent"></div>

            <div className="user-content">
                <h2 className="user-name">{user.username}</h2>

                <div className="user-info">
                    <p><span>Email:</span> {user.email}</p>
                    <p><span>DOB:</span> {user.dob}</p>
                </div>

                <DeleteUser userId={user.id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default UserCard
