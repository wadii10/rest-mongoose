import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editeUser, getUsers } from '../redux/action';

const UpdateUser = ({ updateUser }) => {

    //state
    const [fullName, setFullName] = useState(updateUser.fullName);
    const [email, setEmail] = useState(updateUser.email);
    const [phone, setPhone] = useState(updateUser.phone);
    // console.log(updateUser)

    //update
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(getUsers());
    
    }, [])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedUser = {_id:updateUser._id, fullName, email, phone };
        dispatch(editeUser(editedUser));
        dispatch(getUsers());
        closeModal();
    };
    

    // modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement('#root');
    
    return (
        <div>
            {
                updateUser?<div>
                    <Button variant="primary" onClick={openModal}>Edit Contact</Button>

<Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
>
    <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>'full name'</Form.Label> */}
            <Form.Control type="text" placeholder='full name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>'email'</Form.Label> */}
            <Form.Control type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>'phone'</Form.Label> */}
            <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>

        <div className='btn-add' >
            <Button variant="primary" type="submit" > Update </Button>
            <Button variant="secondary" onClick={() => closeModal()}> Cancel </Button>
        </div>
    </Form>
</Modal>
                </div>:null
            }
        </div>
    )
}

export default UpdateUser