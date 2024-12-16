import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './DateChoosing.module.css';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import { useState } from 'react';


function DateChoosing() {
    const navigate = useNavigate();

    const [begin, setBegin] = useState(null);
    const [end, setEnd] = useState(null);

    const goToTicketList = () => {
        navigate("/trip-list");
    }

    const goToRegister = () => {
        navigate("/register");
    }

    const isDisabled = () => {
        return !(begin || end);
    }

    const dateValidate = () => {
        if (!begin) {
            alert("Ошибка! Не заполнено начало тура (Туда)");
        }

        if (!end) {
            alert("Ошибка! Не заполнен конец тура (Обратно)");
        }

        if (begin == end) {
            alert("Ошибка! Начало и конец тура совпадают");
        }

        if (begin > end) {
            alert("Ошибка! Начало тура позже конца тура");
        }
    }

    return (
        <div className={s.wrapper}>
            <Container>
            <br/>
            <br/><br/>
            <br/>
                <Row>
                    <Col>
                        <label for="birthdaytime">Туда: </label>
                        <input type="date" id="birthdaytime" name="birthdaytime" value={begin} onChange={(e) => setBegin(e.target.value)}/>
                    </Col>

                    <Col>
                        <label for="birthdaytime">Обратно: </label>
                        <input type="date" id="birthdaytime" name="birthdaytime" value={end} onChange={(e) => setEnd(e.target.value)}/>
                    </Col>
                </Row>
                <br/><br/><br/><br/><br/>
                <Row>
                    <ButtonCustom 
                        text={"Готово"} 
                        onClick={goToTicketList}
                        disabled={isDisabled} 
                        />
                </Row>
            </Container>
        </div>
    );
}

export default DateChoosing;