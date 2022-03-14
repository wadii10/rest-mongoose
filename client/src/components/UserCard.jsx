import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../redux/action';
import UpdateUser from './UpdateUser';

const UserCard = ({ user }) => {

  const dispatch = useDispatch();

  return (
    <div className='user-card' >
      
      <Card border="primary" style={{ width: '19rem', height: '30rem' }}>
        <Card.Img variant="top" src="contact.png" style={{ height: '20rem', borderRadius: '50%' }} />
        <Card.Body>
          <Card.Title> {user.fullName} </Card.Title>
          <Card.Text>
            {user.phone}
          </Card.Text>
          <div className="btn-card" >

          <Link to={`/detail/${user._id}`} > <Button variant="info"  > Detail </Button>  </Link>
          <Button variant="danger" onClick={() => { dispatch(deleteUser(user._id)); dispatch(getUsers()) }} > Delete </Button>
          <UpdateUser updateUser={user} />

          </div>
        </Card.Body>
      </Card>

    </div>
  )
}

export default UserCard