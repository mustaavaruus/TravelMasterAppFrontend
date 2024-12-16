import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './Payment.module.css';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import { Airplane, Bank } from 'react-bootstrap-icons';
import { useState } from 'react';

function Payment() {
    const navigate = useNavigate();

    const [price, setPrice] = useState(null);


    const onSubmit = () => {
        navigate("/success");
    }

    const onCancel = () => {
        navigate("/success");
    }

    return (
        <div className={s.wrapper}>
            <div >
                <Image className={s.logo} src="https://www.sberbank.com/promo/sberpay/b77bfbb9889ba4c87865.png" />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={s.innerWrapper}>
                <div className={s.title}>
                    
                    <Row>
                        <Col>
                            <p>Маршрут Мастер</p>
                        </Col>
                        <Col>
                            <Bank className={s.bankLogo}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>{`${price} руб.`}</h3>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <small>Без комиссии</small>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    <Row>
                        <Col>
                            <Image className={s.card} src="https://www.sberbank.com/common/img/uploaded/cards/zayavka_img/sbercard_new_1.jpg" />
                        </Col>
                        <Col>
                            200 279,49 руб.
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            МИР Сберкарта
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            **2586
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <small>Назначение платежа</small>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Airplane /> Москва - Пхукет. вылет 08.07.2024 в 7:30,
                            <br/>
                            SU-278, MARINA FILIPPOVA
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col>
                            <div onClick={onSubmit} className={s.payButton}>Оплатить</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div onClick={onCancel} className={s.cancelButton}>Отменить оплату</div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Payment;