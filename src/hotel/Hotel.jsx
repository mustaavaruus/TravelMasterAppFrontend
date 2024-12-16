import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import s from './Hotel.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InputCustom from '../elements/inputs/InputCustom';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import BackCustom from '../elements/back/BackCustom';
import { useNavigate } from 'react-router';
import { StarFill } from 'react-bootstrap-icons';

const Hotel = (props) => {

    const [hotel, setHotel] = useState([]);

    const navigator = useNavigate();

    const getQuestion = () => {
        var token = JSON.parse(localStorage.getItem('user')).accessToken;

        console.log(token);
        axios({
            method: 'get',
            url: 'http://localhost:5024/api/Hotel/get/by-id/1',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "accessToken": token,
            }
        }).then((data) => {
            console.log(data.data);
            setHotel(data.data);
            //localStorage.setItem('user', JSON.stringify(user.data));
            //navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }

    const nextQuestion = () => {
        navigator("/date-choosing");
    } 

    useEffect(() => {
        getQuestion();
    }, []);


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
                <div>
                    <h2>
                        {hotel?.name}
                    </h2>
                    {
                            (() => {
                                const stars = [];

                                for (let i = 0; i < hotel?.stars; i++) {
                                    stars.push(
                                        <StarFill className={s.starWrapper} />
                                    );
                                }
                                return stars;
                        })()}
                    <p>
                        {hotel?.description}
                    </p>
                    <p>
                        от {hotel?.price} руб.
                    </p>
                </div>
                <div className={s.btnWrapper}>
                    <ButtonCustom text={"Забронируйте сейчас"} onClick={nextQuestion} />
                </div>
            </div>
        </div>
    );
}

export default Hotel;