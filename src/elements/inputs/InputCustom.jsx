import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import s from './InputCustom.module.css';
import { useState } from 'react';
function InputCustom(props) {


    const [text, setText] = useState(props.text);
    const [type, setType] = useState(props.type ?? "text");
    const [title, setTitle] = useState(props.title);

    const setValue = (txt) => {
        console.log(txt);
        if (!!props.setText) {
            props.setText(txt);
        }
        setText(txt);
    }

    
    return (
        <div className={s.wrapper}>
            <Form.Group className={s.inputCustom} controlId="form123132">
                    <Form.Label>{title}</Form.Label>
                    <Form.Control type={type} className={s.inputCustomBody} placeholder={title} value={text} onChange={(e) => {setValue(e.target.value)}} />
            </Form.Group>
        </div>
    );
}

export default InputCustom;