import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { getObjectActions } from '../apollo/actions';

function RegisterforEvent({eventId}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[updateEvent] = getObjectActions["useUpdateEvent"]();

    const [valueInput, setValueInput] = useState({
        name: '',
        phone: '',
        email: '',
      });

    const handleInputChange = (e,name) => {
        const a= name;
        const value = e;
        console.log("name",a);
        setValueInput((prevData) => ({
          ...prevData,
          [a]: value
        }));
        console.log(valueInput);
      };

    const updateParticipants = async () => {
        try {
            const resp = await updateEvent({
              variables: { input: valueInput },
            });

          } catch (error) {
            console.error('Kayıt hatası:', error);
          }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Etkinliğe Kayıt Ol
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Unutma! Etkinlike Sen Yoksan Eksiğiz.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group onChange={(e) => handleInputChange(e.target.value,"name")}
                            className="mb-3"
                            controlId="name"
                            name="name"
                        >
                            <Form.Label>İsim / Soyisim</Form.Label>
                            <Form.Control type='text' rows={3} />
                        </Form.Group>

                        <Form.Group onChange={(e) => handleInputChange(e.target.value,"phone")}
                            className="mb-3"
                            controlId="phoneNumber"
                            name="phone"
                        >
                            <Form.Label>Telefon Numarası</Form.Label>
                            <Form.Control type="phone" rows={3} />
                        </Form.Group>
                        

                        <Form.Group onChange={(e) => handleInputChange(e.target.value,"email")}
                        className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                autoFocus
                                name="email"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Kapat
                    </Button>
                    <Button variant="primary" onClick={updateParticipants}>
                        Kayıt Ol
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegisterforEvent;