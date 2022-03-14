import React, { useEffect } from 'react'
import { getUsers } from '../redux/action';
import UserCard from './UserCard';
import { useDispatch, useSelector} from 'react-redux';

const ListUsers = () => {

    const {users} = useSelector( state => state);
    
    //dispatch
    const dispatch = useDispatch();

    //useEffect
    useEffect(() => {
      dispatch(getUsers());
    }, []);
    
  return (
    <div className='user-list' >
        {
            users && React.Children.toArray(
                users.map( el => <UserCard user={el} />)
            )
        }
    </div>
  )
}

export default ListUsers