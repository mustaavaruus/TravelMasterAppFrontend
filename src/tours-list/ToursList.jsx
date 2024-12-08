import { Button, Container, Form, Row } from 'react-bootstrap';
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

    const [question, setQuestion] = useState(null);

    const navigator = useNavigate();

    const getQuestion = () => {
        axios({
            method: 'get',
            url: 'http://localhost:5064/api/Tour/get/all',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "accessToken": JSON.parse(localStorage.getItem('user')).accessToken,
            }
        }).then((data) => {
            console.log(data.data);
            setQuestion(data.data);
            //localStorage.setItem('user', JSON.stringify(user.data));
            //navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }

    const nextQuestion = () => {
        navigator("/generating");
    } 

    useEffect(() => {
        getQuestion();
    }, []);


    return (
        <div className={s.wrapper}>
            <div>
                <p>Вопрос № {question?.questionText}</p>
                {
                    question?.imageTexts?.map((d) => <ToursItem answerText={d}/>)
                }
                <div className={s.btnWrapper}>
                    <ButtonCustom text={"Далее"} onClick={nextQuestion} />
                </div>
            </div>
        </div>
    );
}

export default ToursList;