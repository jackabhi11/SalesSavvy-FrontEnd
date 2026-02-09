import React from 'react'
import UserCard from './UserCard'

function ShowUser(props) {
    const list = props.list;
    return (
        <div>
            <div className='showCard'>
               { list !== undefined ? list.map((user)=><UserCard user={user}/>) : <h3>Admin List Is Not Available</h3> }
            </div>
        </div>
    )
}

export default ShowUser
