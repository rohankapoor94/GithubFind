import React from 'react'
import UserItem from './UserItem';
const Users=({users,loading})=> {
    if (loading) {
        return<div style={{display: "block"}} className="spinner-grow text-dark mx-auto"></div>
    }
    else{
        return (
            <div style={userStyle}>
                {users.map(user=>(
                    <UserItem key={user.id} user={user}>{user.login}</UserItem>
                )
                )}
            </div>
        )}
    }
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'10px'
}
export default Users
