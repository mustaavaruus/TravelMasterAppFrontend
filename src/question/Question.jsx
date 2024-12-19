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
        localStorage.removeItem('userAnswers');
        console.log("HERE!");
        getQuestion();
    }, []);

    const onAnswerChoose = (id) => {


        console.log("choosed!");
        console.log(id);
        setDisabled(false);
        var userAnswers = JSON.parse(localStorage.getItem('userAnswers')) ?? [];
        userAnswers.push({answerId: id});
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        console.log(JSON.parse(localStorage.getItem('userAnswers') ?? []));
        
    }


    return (
        <div className={s.wrapper}>
            <div>
                <p>Вопрос № {number} {question?.question?.text}</p>
                {
                    question?.answers?.map((d, i) => <Answer onClick={onAnswerChoose} answer={d} />)
                }
                <div className={s.btnWrapper}>
                    <ButtonCustom text={"Далее"} onClick={nextQuestion}  />
                </div>
            </div>
        </div>
    );
}

export default Question;