import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import s from './InputWhiteCommon.module.css';
import { useEffect, useState } from 'react';
function InputWhiteCommon(props) {


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

    useEffect(() => {
        setText(props.text);
    }, [props.text]);
    
    return (
        <div className={s.wrapper}>
            <Form.Group className={s.inputCustom} controlId="form123132">
                    <input 
                        type={type} 
                        className={s.inputCustomBody} 
                        placeholder={title} 
                        value={text} 
                        onChange={(e) => {setValue(e.target.value)}} />
            </Form.Group>
        </div>
    );
}

export default InputWhiteCommon;