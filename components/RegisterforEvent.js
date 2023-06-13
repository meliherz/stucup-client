import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { getObjectActions } from '../apollo/actions';

function RegisterforEvent({eventId}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const[updateEvent] = getObjectActions["useUpdateEvent"]();

    // const [valueInput, setValueInput] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //   });

    // const handleInputChange = (e,name) => {
    //     const a= name;
    //     const value = e;
    //     console.log("name",a);
    //     setValueInput((prevData) => ({
    //       ...prevData,
    //       [a]: value
    //     }));
    //     console.log(valueInput);
    //   };

    // const updateParticipants = async () => {
    //     try {
    //         const resp = await updateEvent({
    //           variables: { input: valueInput },
    //         });

    //       } catch (error) {
    //         console.error('Kayıt hatası:', error);
    //       }
    // };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Etkinliğe Kayıt Ol
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>QR</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    aaaaaa
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Kapat
                    </Button>
                    <Button variant="primary">
                        Kayıt Ol
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegisterforEvent;