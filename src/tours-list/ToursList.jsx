import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import s from './ToursList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InputCustom from '../elements/inputs/InputCustom';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import BackCustom from '../elements/back/BackCustom';
import { useNavigate } from 'react-router';
import Answer from '../answer/Answer';
import ToursItem from './tour-item/TourItem';

const ToursList = (props) => {

    const [tours, setTours] = useState([]);

    const [choosedTourId, setChoosedTourId] = useState(null);

    const navigator = useNavigate();

    const getQuestion = () => {
        var userAnswers = JSON.parse(localStorage.getItem('userAnswers')) ?? [];
        var token = JSON.parse(localStorage.getItem('user')).accessToken;
        axios({
            method: 'post',
            url: 'http://localhost:5024/api/Tour/get/all',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "accessToken": token,
            },
            data: {answers: userAnswers}
        }).then((data) => {
            console.log(data.data);
            setTours(data.data);
            //localStorage.setItem('user', JSON.stringify(user.data));
            //navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }

    const nextQuestion = () => {
        navigator("/generating");
    } 

    const onTourChoose = (e, id) => {
        setChoosedTourId(id);
        console.log(id);
    }

    useEffect(() => {
        getQuestion();
    }, []);


    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.imgWrapper}>
                    <div className={s.imgTitleWrapper}>
                        Сгенерированные туры
                    </div>

                    <Image className={s.imgImage}
                    src="https://img.freepik.com/premium-photo/beautiful-sunrise-sea-dawn-red-sea-sun-is-reflected-sea-palm-trees_251376-1437.jpg" />
                </div>
                {
                    tours?.map((d, index) => <div onClick={(e, i) => onTourChoose(e, d?.id)}><ToursItem tour={d} /></div>)
                }
                <div className={s.btnWrapper}>
                    <ButtonCustom text={"Далее"} onClick={nextQuestion} disabled={choosedTourId == null} />
                </div>
            </div>
        </div>
    );
}

export default ToursList;