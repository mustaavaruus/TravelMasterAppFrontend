import { Button, Container, Form, Row } from 'react-bootstrap';
import s from './Register.module.css';
import axios from 'axios';
import { useState } from 'react';
import InputCustom from '../elements/inputs/InputCustom';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import BackCustom from '../elements/back/BackCustom';
import { useNavigate } from 'react-router';

const Register = (props) => {

    const navigator = useNavigate();

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [patronymic, setPatronymic] = useState();

    const [phoneUser, setPhoneUser] = useState();
    const [emailUser, setEmailUser] = useState();
    const [passwordUser, setPasswordEmailUser] = useState();


    const onRegisterButtonClick = () => {
         console.log("on ok");
 
         console.log(emailUser, passwordUser);
 
         axios({
             method: 'post',
             url: 'http://localhost:5064/api/User/register/',
             headers: {
                 "Accept": "application/json",
                 "Content-Type": "application/json"
             },
             data: {
                 "id": 0,
                 "surname": surname,
                 "name": name,
                 "patronymic": patronymic,
                 "accessToken": "",
                 "role": 0,
                 "phone": phoneUser,
                 "email": emailUser,
                 "password": passwordUser,
                 "telegram": "",
                 "vk": "",
                 "instagram": "",
             }
         }).then((user) => {
             console.log(user.data);
             navigator("/auth");
         }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }


    return (
        <div className={s.wrapper}>
            <Container>
                <BackCustom />
                <Row>
                    <h2 className={s.titleWrapper}>Зарегистрироваться</h2>
                </Row>
                <Row>
                    <InputCustom
                        text={name}
                        setText={setName}
                        title={"Имя"}
                    />
                    <InputCustom
                        type={"text"}
                        text={surname}
                        setText={setSurname}
                        title={"Фамилия"}
                    />
                    <InputCustom
                        type={"text"}
                        text={patronymic}
                        setText={setPatronymic}
                        title={"Отчество"}
                    />
                    <InputCustom
                        type={"email"}
                        text={emailUser}
                        setText={setEmailUser}
                        title={"Ваш e-mail"}
                    />
                    <InputCustom
                        type={"phone"}
                        text={phoneUser}
                        setText={setPhoneUser}
                        title={"телефон"}
                    />
                    <InputCustom
                        type={"password"}
                        text={passwordUser}
                        setText={setPasswordEmailUser}
                        title={"Пароль"}
                    />
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row className={s.btnWrapper}>
                    <ButtonCustom text={"Войти"} onClick={onRegisterButtonClick} />
                </Row>
            </Container>
        </div>
    );
}

export default Register;