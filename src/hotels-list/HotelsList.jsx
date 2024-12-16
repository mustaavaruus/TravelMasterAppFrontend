import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import s from './HotelsList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InputCustom from '../elements/inputs/InputCustom';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import BackCustom from '../elements/back/BackCustom';
import { useNavigate } from 'react-router';
import HotelItem from './hotel-item/HotelItem';

const HotelsList = (props) => {

    const [tours, setTours] = useState([]);
    const [choosedHotelId, setChoosedHotelId] = useState();

    const navigator = useNavigate();

    const getQuestion = () => {
        var token = JSON.parse(localStorage.getItem('user')).accessToken;

        console.log(token);
        axios({
            method: 'get',
            url: 'http://localhost:5024/api/Hotel/get/all',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "accessToken": token,
            }
        }).then((data) => {
            console.log(data.data);
            setTours(data.data);
            //localStorage.setItem('user', JSON.stringify(user.data));
            //navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }

    const nextQuestion = () => {
        navigator("/hotel");
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
                <div className={s.imgWrapper}>
                    <div className={s.imgTitleWrapper}>
                        Пхукет, Тайланд
                    </div>

                    <Image className={s.imgImage}
                    src="https://cdn2.tu-tu.ru/image/pagetree_node_data/1/50d90d074b95c8d20e36501c80d157eb/" />
                </div>
                {
                    tours?.map((d) => <div onClick={(e, indx) => onTHotelChoose(e, d.id)}><HotelItem tour={d} /></div>)
                }
                <div className={s.btnWrapper}>
                    <ButtonCustom text={"Далее"} onClick={nextQuestion} disabled={!choosedHotelId}/>
                </div>
            </div>
        </div>
    );
}

export default HotelsList;