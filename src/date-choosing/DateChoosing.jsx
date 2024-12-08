import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './DateChoosing.module.css';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';


function DateChoosing() {
    const navigate = useNavigate();

    const goToAuth = () => {
        navigate("/auth");
    }

    const goToRegister = () => {
        navigate("/register");
    }

    return (
        <div className={s.wrapper}>
            <Container>
                <div className={s.wrapper} xs={4} md={3}>
                    <Image src="https://static.vecteezy.com/system/resources/thumbnails/023/358/444/small_2x/landscape-consists-of-terraced-plateaus-with-multicolored-waterfalls-and-3d-floating-islands-ai-generated-png.png" roundedCircle />
                </div>
                <Row>
                    <h2>МаршрутМастер</h2>
                </Row>
                <Row>
                    <ButtonCustom text={"Войти"} onClick={goToAuth} />
                    <ButtonCustom text={"Зарегистрироваться"} onClick={goToRegister} />
                </Row>
            </Container>
        </div>
    );
}

export default DateChoosing;