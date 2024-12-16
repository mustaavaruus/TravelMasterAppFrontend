import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import s from './BankItem.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Check, Star, StarFill } from 'react-bootstrap-icons';


const BankItem = (props) => {

    const [bank, setBank] = useState(props.bank);

    useEffect(() => {
        console.log(props.answerText);
        setBank(props.bank);
        console.log(props.bank);
    }, [props.bank]);


    return (
        <div className={s.wrapper}>
            <div className={s.pic}>
                <div className={s.rightWrapper}>
                    <p className={s.name}>{`${bank?.name}`}</p>
                </div>
                {<Image src={bank?.logo} className={s.imgWrapper}/>}
            </div>
        </div>
    );
}

export default BankItem;