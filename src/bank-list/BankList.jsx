import s from './BankList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import BankItem from './bank-item/BankItem';

const BankList = (props) => {

    const [banks, setBanks] = useState([]);
    const [choosedHotelId, setChoosedHotelId] = useState();

    const navigator = useNavigate();

    const getQuestion = () => {
        var token = JSON.parse(localStorage.getItem('user')).accessToken;

        console.log(token);
        axios({
            method: 'get',
            url: 'http://localhost:5024/api/Bank/get/all',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "accessToken": token,
            }
        }).then((data) => {
            console.log(data.data);
            setBanks(data.data);
            //localStorage.setItem('user', JSON.stringify(user.data));
            //navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }

    const onSubmit = () => {
        navigator("/payment");
    } 

    useEffect(() => {
        getQuestion();
    }, []);

    const onTHotelChoose = (e, id) => {
        setChoosedHotelId(id);
        console.log(id);
    }

    return (
        <div className={s.wrapper}>
            <div>
                <div>Выберите ваш банк</div>
                <div>Вcе банки</div>
                {
                    banks?.map((d) => <div onClick={(e, indx) => onTHotelChoose(e, d.id)}><BankItem bank={d} /></div>)
                }
                <div className={s.btnWrapper}>
                    <ButtonCustom text={"Далее"} onClick={onSubmit} disabled={!choosedHotelId}/>
                </div>
            </div>
        </div>
    );
}

export default BankList;