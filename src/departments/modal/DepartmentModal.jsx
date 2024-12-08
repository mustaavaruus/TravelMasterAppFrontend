import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import s from './DepartmentModal.module.css';
import { useEffect, useState } from 'react';

const DepartmentModal = (props) => {

    const [show, setShow] = useState(props.show);

    useEffect(() => {
        setShow(props.show);
        console.log("HERE!");
    }, [
        props.show
    ]);

    const hideModal = () => {
        setShow(false);
    }

    const submitModal = () => {
        setShow(false);
    }

    return (
        <div
            className={`${s.wrapper} modal show`}
            style={{ display: show ? 'block' : 'none', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={submitModal}>Save changes</Button>
                    <Button variant="secondary" onClick={hideModal}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default DepartmentModal;