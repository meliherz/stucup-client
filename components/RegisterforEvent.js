import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function RegisterforEvent() {
    const [show, setShow] = useState(false);
    const [valueInput, setValueInput] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnChange = (value,key) => {
        setValueInput((prevValue) => ({ ...prevValue, [key]: value }));
        console.log(valueInput);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Etkinliğe Kayıt Ol
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Unutma! Etkinlike Sen Yoksan Eksiğiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group onChange={(e) => handleOnChange(e.target.value, "name")}
                            className="mb-3"
                            controlId="name"
                        >
                            <Form.Label>İsim / Soy İsim</Form.Label>
                            <Form.Control type='text' rows={3} />
                        </Form.Group>

                        <Form.Group onChange={(e) => handleOnChange(e.target.value, "phone")}
                            className="mb-3"
                            controlId="phoneNumber"
                        >
                            <Form.Label>Telefon Numarası</Form.Label>
                            <Form.Control type="phone" rows={3} />
                        </Form.Group>
                        

                        <Form.Group onChange={(e) => handleOnChange(e.target.value, "email")}
                        className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegisterforEvent;