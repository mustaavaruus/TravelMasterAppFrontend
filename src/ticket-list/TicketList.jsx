import s from './TicketList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import TicketItem from './ticket-item/TicketItem';

const TicketList = (props) => {

    const [tickets, setTickets] = useState([]);
    const [choosedTicketId, setChoosedTicketId] = useState();

    const navigator = useNavigate();



    const getTickets = () => {
        var token = JSON.parse(localStorage.getItem('user')).accessToken;

        console.log(token);
        axios({
            method: 'get',
            url: `http://localhost:5024/api/Ticket/get/all/${1}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "accessToken": token,
            }
        }).then((data) => {
            console.log(data.data);
            setTickets(data.data);
            //localStorage.setItem('user', JSON.stringify(user.data));
            //navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }

    const nextQuestion = () => {
        navigator("/hotel");
    } 

    useEffect(() => {
        getTickets();
    }, []);

    const onTHotelChoose = (e, id) => {
        setChoosedTicketId(id);
        console.log(id);
    }

    return (
        <div className={s.wrapper}>
            <div>
                {`Найдено ${tickets?.length} билетов`}
                {
                    tickets?.map((d) => <div onClick={(e, indx) => onTHotelChoose(e, d.id)}><TicketItem ticket={d} /></div>)
                }
                <div className={s.btnWrapper}>
                    <ButtonCustom text={"Далее"} onClick={nextQuestion} disabled={!choosedTicketId}/>
                </div>
            </div>
        </div>
    );
}

export default TicketList;