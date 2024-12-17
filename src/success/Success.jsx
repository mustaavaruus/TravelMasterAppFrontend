import { Col, Container, Image, Nav, NavLink, Row } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './Success.module.css';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import { Link } from 'react-bootstrap-icons';
function Success() {
    const navigate = useNavigate();

    const goToQuestions = () => {
        navigate("/question");
    }

    return (
        <div className={s.wrapper}>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
                <div className={s.wrapper} xs={4} md={3}>
                    <Image className={s.img} src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" roundedCircle />
                </div>
                <br/>
                <Row>
                    <h4>Оплата прошла успешно!</h4>
                    <br/>
                    <br/>
                    <p>Пройдите в <NavLink className={s.navlink} to="/user">Личный кабинет</NavLink>, чтобы
                    <br/>отслеживать информацию о вашем билете.</p>
                </Row>
            </Container>
        </div>
    );
}

export default Success;