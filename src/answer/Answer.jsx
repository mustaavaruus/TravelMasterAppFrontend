import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import s from './Answer.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Check } from 'react-bootstrap-icons';


const Answer = (props) => {

    const [answer, setAnswer] = useState(props.answer ?? []);
    const [checked, setChecked] = useState(props.checked);
    const [radio, setRadio] = useState(false);

    useEffect(() => {
        setAnswer(props.answer);
        setChecked(props.checked);
        console.log(props.answer);
    }, [props.answer, props.checked]);

    const onChange = (e) => {
        if (!!props.onClick) {
            props.onClick(answer?.id);
        }
    }


    return (
        <div className={s.wrapper}>
            <div className={s.left}>
                <div>
                    <input className={s.round} type="radio" name="drone" value={radio}  onChange={(e) => onChange(e)}/>
                    {/*
                        checked
                        ? <Check className={s.check}/>
                        : null*/
                    }
                </div>
            </div>
            <div className={s.right}>
                {<Image src={answer.image} className={s.imgWrapper}/>}
            </div>
        </div>
    );
}

export default Answer;