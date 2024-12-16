import { Col, Container, Image, Nav, NavLink, Row } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './User.module.css';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import { Airplane, Bell, Clipboard, Instagram, Person, Phone, Telegram } from 'react-bootstrap-icons';
import InputWhiteCommon from '../elements/inputs/input-white-common/InputWhiteCommon';
import { useEffect, useState } from 'react';
import axios from 'axios';
function User() {


    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const getUser = () => {
        setUser(null);
        axios({
            method: 'get',
            url: `http://localhost:5024/api/User/get-my-account`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "accessToken": JSON.parse(localStorage.getItem('user')).accessToken,
            }
        }).then((data) => {
            console.log(data.data);
            setUser(data.data);
            //localStorage.setItem('user', JSON.stringify(user.data));
            //navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }

    useEffect(() => {
        getUser();
    }, []);

    const onSubmit = () => {

    }

    return (
        <div className={s.wrapper}>
            <div className={s.common}>
                <Row>
                    <Col>
                        <Image roundedCircle className={s.userLogo} src="https://img.freepik.com/premium-vector/new-woman-avatar-icon-flat-illustration-woman-avatar-vector-icon-isolated-white-background_98396-5726.jpg" />
                    </Col>
                    <Col>
                        Изменить фото профиля
                    </Col>
                    <Col>
                        <Bell />
                    </Col>
                </Row>
                <InputWhiteCommon title={"Фамилия"} text={user?.surname} />
                <InputWhiteCommon title={"Имя"} text={user?.name} />
                <InputWhiteCommon title={"Телефон"} text={user?.phone} />
                <InputWhiteCommon title={"e-mail"} text={user?.email} />

                <h6>Мои билеты</h6>
                <div className={s.pdf}>
                    <Clipboard />MOW_HKT.pdf
                </div>
                <h6>Соцсети</h6>
                <NavLink  className={s.navSocial} to={user?.vk}>
                    <Image className={s.social} src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" />
                </NavLink >
                <NavLink className={s.navSocial} to={user?.telegram}>
                    <Image className={s.social} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/800px-Telegram_Messenger.png" />
                </NavLink >
                <NavLink  className={s.navSocial} to={user?.instagram}>
                    <Image className={s.social} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" />
                </NavLink >
                <br /><br />
                <div className={s.supportButton}>Служба поддержки</div>
                <div className={s.logOutButton}>Выйти из профиля</div>
            </div>
        </div>
    );
}

export default User;