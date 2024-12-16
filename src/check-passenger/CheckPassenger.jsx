import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './CheckPassenger.module.css';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import { Airplane, Bank, Check, Person, Phone } from 'react-bootstrap-icons';
import InputWhiteCommon from '../elements/inputs/input-white-common/InputWhiteCommon';
import { useState } from 'react';
function CheckPassenger() {

    const [passenger, setPassenger] = useState(null);
    const [buyer, setBuyer] = useState(null);

    const [price, setPrice] = useState(null);
    const navigate = useNavigate();


    const onSubmit = () => {
        navigate("/bank-list");
    }


    return (
        <div className={s.wrapper}>
            <h3>Проверьте информацию</h3>
           <div className={s.common}>
                <Airplane />
           </div>
           <div className={s.common}>
                <p><Person /> Пассажиры</p>
                <hr/>
                <p>{`${passenger?.surname} ${passenger?.name}`}</p>
                <p>{`Дата рождения: ${passenger?.birthday}`}</p>
                <p>{`Документ: ${passenger?.docSeriaNumber}`}</p>
                <p>{`Срок действия: ${passenger?.docSeriaNumber}`}</p>
           </div>
           <div className={s.common}>
                <p><Phone />Покупатель</p>
                <hr/>
                <p>{`${buyer?.surname} ${buyer?.name}`}</p>
                <p>{`Дата рождения: ${buyer?.birthday}`}</p>
                <p>{`Документ: ${passenger?.docSeriaNumber}`}</p>
           </div>
           <div className={s.common}>
            <p>Способ оплаты</p>
                <Row>
                    <Col>
                        <div className={s.card}>
                            <Bank className={s.icon}/>
                            <p>Система быстрых платежей</p>
                        </div>
                    </Col>
                    <Col>
                        <div className={s.card}>
                            <Bank className={s.icon}/>
                            <p>Банковская карта</p>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <p>{`${price}руб`}</p>
                <p>за одного пассажира</p>
                
                <ButtonCustom text={"Оплатить"} onClick={onSubmit} />
           </div>
        </div>
    );
}

export default CheckPassenger;