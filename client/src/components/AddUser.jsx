import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, Form } from 'react-bootstrap';
import { addUser } from '../redux/action';
import { useDispatch } from 'react-redux';

const AddUser = () => {

    //state
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    //hundle submit
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { fullName, email, phone };
        dispatch(addUser(newUser));
        setFullName("");
        setEmail("");
        setPhone("");
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
            <Button className='up up-1' onClick={openModal}>Add Contact</Button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Form onSubmit={handleSubmit}>
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
                        <Button variant="primary" type="submit" > Add </Button>
                        <Button variant="secondary" onClick={() => closeModal()}> Cancel </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default AddUser