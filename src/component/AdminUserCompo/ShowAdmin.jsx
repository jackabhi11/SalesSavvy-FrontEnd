import React from 'react'
import UserCard from './UserCard';
import { useState } from 'react';

function ShowAdmin(props) {
    const [users, setUsers] = useState(props.list || []);

    const handleDelete = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id));
    };

    return (
        <div className="showCard">
            {users.length > 0 ? (
                users.map(user => (
                    <UserCard
                        key={user.id} 
                        user={user}
                        onDelete={handleDelete}
                    />
                ))
            ) : (
                <h3>Admin List Is Not Available</h3>
            )}
        </div>
    );
}

export default ShowAdmin
