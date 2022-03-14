import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailUser = () => {

    //state user
    const [user, setUser] = useState(null)

    //use params
    const {_id} = useParams();
    // console.log(_id)

    // use effect
    useEffect(() => {
        try {
            const getOneUser = async () => {
                const res = await axios.get("/get");
                setUser(res.data.find(el => el._id === _id));

                const res1 = await axios.get(`/get/${user._id}`) ;
                return setUser(res1.data);
              };
              getOneUser();
        } catch (error) {
            alert("get one error")
        }
    }, [_id])
    
  return (
    <div>
        <h1>{user && user.fullName}</h1>
    </div>
  )
}

export default DetailUser