import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import s from './TicketItem.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Check, Star, StarFill } from 'react-bootstrap-icons';


const TicketItem = (props) => {

    const [ticket, setTicket] = useState(props.ticket);

    useEffect(() => {
        console.log(props.answerText);
        setTicket(props.ticket);
        console.log(props.ticket);
    }, [props.ticket]);


    return (
        <div className={s.wrapper}>
                <div>
                    <p>{`${ticket?.price}`} руб.</p>
                    <br/>     
                    <p>{ticket?.description}</p>
                    {}
                </div>
        </div>
    );
}

export default TicketItem;