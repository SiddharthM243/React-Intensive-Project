import React, { useState } from "react";
import "./NewTweet";
import  Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



function NewTweet() {
    const [show, setshow] = useState(false);
    const handleShow = () => setshow(true);
    const handleClose = () => setshow(false)
    return (
        <div>
            <button
                onClick={handleShow} data-bs-toggle="modal" data-bs-target="#exampleModal" className="tweet-btn">Tweet</button>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Twitter App</Modal.Title>
                </Modal.Header>
                <Modal.Body>Welcome to Twitter Application</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}



export default NewTweet;