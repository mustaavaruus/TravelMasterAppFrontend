import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import s from './TourItem.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Check } from 'react-bootstrap-icons';


const ToursItem = (props) => {

    const [answerText, setAnswerText] = useState(props.answerText ?? []);

    useEffect(() => {
        setAnswerText(props.answerText);
        console.log(props.answerText);
    }, [props.answerText]);


    return (
        <div className={s.wrapper}>
            <div className={s.left}>
                <div className={s.round}>
                    <Check className={s.check}/>
                </div>
            </div>
            <div className={s.right}>
                {<Image src={answerText} className={s.imgWrapper}/>}
            </div>
        </div>
    );
}

export default ToursItem;