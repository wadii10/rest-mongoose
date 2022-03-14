import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../redux/action';
import UpdateUser from './UpdateUser';

const UserCard = ({user}) => {

  const dispatch = useDispatch();

  return (
    <div>
        <h1>{user.fullName}</h1>
        <UpdateUser updateUser={user} />
        <button onClick={ () => { dispatch(deleteUser(user._id)); dispatch(getUsers())}}> delete </button>
        <Link to={`/detail/${user._id}`} > <Button variant="primary"  > Detail </Button>  </Link>
        <hr />
    </div>
  )
}

export default UserCard