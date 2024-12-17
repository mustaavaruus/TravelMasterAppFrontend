import { Button, Container, Form, Row } from 'react-bootstrap';
import s from './Question.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InputCustom from '../elements/inputs/InputCustom';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import BackCustom from '../elements/back/BackCustom';
import { useNavigate } from 'react-router';
import Answer from '../answer/Answer';

const Question = (props) => {

    const [question, setQuestion] = useState(null);

    const [number, setNumber] = useState(1);

    const [disabled, setDisabled] = useState(true);

    const navigator = useNavigate();

    const getQuestion = () => {
        setQuestion(null);
        setDisabled(true);
        axios({
            method: 'get',
            url: `http://localhost:5024/api/Question/get/${number}`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "accessToken": JSON.parse(localStorage.getItem('user')).accessToken,
            }
        }).then((data) => {
            console.log(data.data);
            setQuestion(data.data);
            setNumber(number + 1);
            //localStorage.setItem('user', JSON.stringify(user.data));
            //navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }

    const nextQuestion = () => {
        if (number > 10) {
            navigator("/generating");
            return;
        }
        getQuestion();
    } 

    useEffect(() => {
        getQuestion();
    }, []);

    const onAnswerChoose = () => {
        console.log("choosed!");
        setDisabled(false);
    }


    return (
        <div className={s.wrapper}>
            <div>
                <p>Вопрос № {number} {question?.questionText}</p>
                {
                    question?.imageTexts?.map((d, i) => <Answer onClick={onAnswerChoose} answerText={d} />)
                }
                <div className={s.btnWrapper}>
                    <ButtonCustom text={"Далее"} onClick={nextQuestion} disabled={disabled} />
                </div>
            </div>
        </div>
    );
}

export default Question;