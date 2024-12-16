import { Col, Container, Image, Row } from 'react-bootstrap';
import s from './ButtonCustom.module.css';
import { useEffect, useState } from 'react';
function ButtonCustom(props) {


    const [text, setText] = useState(props.text);
    const [disabled, setDisabled] = useState(props.disabled ?? false);

    useEffect(() => {
        setDisabled(props.disabled);
    }, [
        props.disabled
    ]);

    const onClick = () => {
        console.log("on click!");
        if (!!props.onClick) {
            props.onClick();
        }
    }

    return (
        <div className={s.wrapper}>
            <button 
                className={s.btn} 
                type="button" 
                onClick={() => {onClick()}}
                disabled={disabled}>{text}</button>
        </div>
    );
}

export default ButtonCustom;