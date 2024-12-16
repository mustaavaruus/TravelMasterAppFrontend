import { Button, Container, Form, Row } from 'react-bootstrap';
import s from './Auth.module.css';
import axios from 'axios';
import { useState } from 'react';
import InputCustom from '../elements/inputs/InputCustom';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import BackCustom from '../elements/back/BackCustom';
import { useNavigate } from 'react-router';

const Auth = (props) => {

    const [phoneUser, setPhoneUser] = useState();
    const [emailUser, setEmailUser] = useState();
    const [passwordUser, setPasswordUser] = useState("");

    const navigator = useNavigate();

    const onAuthButtonClick = () => {
        console.log("on ok");

        console.log(emailUser, passwordUser);

        axios({
            method: 'post',
            url: 'http://localhost:5024/api/User/auth/',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: {
                "phone": phoneUser,
                "email": emailUser,
                "password": passwordUser,
            }
        }).then((user) => {
            console.log(user.data);
            localStorage.setItem('user', JSON.stringify(user.data));
            navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }


    return (
        <div className={s.wrapper}>
            <Container>
                <BackCustom />
                <Row>
                    <h2 className={s.titleWrapper}>Вход в аккаунт</h2>
                </Row>
                <Row>
                    <InputCustom
                        type={"phone"}
                        text={phoneUser}
                        setText={setPhoneUser}
                        title={"телефон"}
                    />
                    <InputCustom
                        type={"email"}
                        text={emailUser}
                        setText={setEmailUser}
                        title={"Ваш e-mail"}
                    />
                    <InputCustom
                        type={"password"}
                        text={emailUser}
                        setText={setPasswordUser}
                        title={"Ваш пароль"}
                    />

                    
                </Row>
                <br/>
                <br/>
                <br/>
                <br/>
                <Row className={s.btnWrapper}>
                    <ButtonCustom text={"Войти"} onClick={onAuthButtonClick} />
                </Row>
            </Container>
        </div>
    );
}

export default Auth;