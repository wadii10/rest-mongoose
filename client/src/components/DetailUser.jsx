import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getOne } from '../redux/action';

const DetailUser = () => {
    
    //state user
    const user = useSelector( state => state.users);
    // const [user, setUser] = useState(null)
    //use params
    const {_id} = useParams();
    // console.log(_id)

    //dispatch
    const dispatch = useDispatch();

    // use effect
    useEffect(() => {
        // try {
        //     const getOneUser = async () => {
        //         const res1 = await axios.get(`/get/${_id}`) ;
        //         return setUser(res1.data);
        //       };
        //       getOneUser();
            
        // } catch (error) {
        //     alert("get one error")
        // }

        dispatch(getOne(_id))

    }, []);
    
  return (
    <div className='user-detail' >
        
        {user && <Card border="primary" style={{ width: '19rem', height: '33rem' }}>
        <Card.Img variant="top" src="/contact.png" style={{ height: '20rem', borderRadius: '50%' }} />
        <Card.Body>
          <Card.Title> { user.fullName} </Card.Title>
          <Card.Text>
            { user.phone}
            <hr />
            { user.email}
          </Card.Text>
          <Link to="/" ><Button className='up up-1' >Back</Button></Link>
        </Card.Body>
      </Card>}

    </div>
  )
}

export default DetailUser