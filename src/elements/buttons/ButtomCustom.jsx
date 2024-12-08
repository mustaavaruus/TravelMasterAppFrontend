import { Col, Container, Image, Row } from 'react-bootstrap';
import s from './ButtonCustom.module.css';
import { useState } from 'react';
function ButtonCustom(props) {


    const [text, setText] = useState(props.text);

    const onClick = () => {
        console.log("on click!");
        if (!!props.onClick) {
            props.onClick();
        }
    }

    return (
        <div className={s.wrapper}>
            <button className={s.btn} type="button" onClick={() => {onClick()}}>{text}</button>
        </div>
    );
}

export default ButtonCustom;