import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
        <h1>{user.fullName}</h1>
    </div>
  )
}

export default UserCard