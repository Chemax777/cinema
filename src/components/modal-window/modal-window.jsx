import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ModalWindow({ showModal }) {

    return (
        <>
            <Modal show={showModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Thanks for purchase!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can see your tickets on my tickets page!</Modal.Body>
                <Modal.Footer>
                    <Link to={'/my-tickets'}>
                        <Button variant="primary" >
                            Go to My Tickets Page
                        </Button>
                    </Link>
                    <Link to={'/'}>
                        <Button variant="primary" >
                            Go to Home Page
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;