import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './FillPassenger.module.css';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import { Airplane, Person, Phone } from 'react-bootstrap-icons';
import InputWhiteCommon from '../elements/inputs/input-white-common/InputWhiteCommon';
import { useState } from 'react';
function FillPassenger() {


    const [passSurname, setPassSurname] = useState(null);
    const [passName, setPassName] = useState(null);
    const [passSex, setPassSex] = useState(null);
    const [passBirthday, setPassBirthday] = useState(null);
    const [passDocSeriaNumber, setPassDocSeriaNumber] = useState(null);
    const [passDocDate, setPassDocDate] = useState(null);

    const [buyerSurname, setBuyerSurname] = useState(null);
    const [buyerName, setBuyerName] = useState(null);
    const [buyerEmail, setBuyerEmail] = useState(null);
    const [buyerPhone, setBuyerPhone] = useState(null);

    const [price, setPrice] = useState(null);
    const navigate = useNavigate();

    const onSubmit = () => {

    }

    return (
        <div className={s.wrapper}>
           <div className={s.common}>
                <Airplane />
           </div>
           <div className={s.common}>
                <p>Пассажир</p>
                <InputWhiteCommon title={"Фамилия"} text={passSurname} setText={setPassSurname}/>
                <InputWhiteCommon title={"Имя"} text={passName} setText={setPassName}/>
                <InputWhiteCommon title={"Пол"} text={passSex} setText={setPassSex}/>
                <InputWhiteCommon title={"Дата рождения"} text={passBirthday} setText={setPassBirthday}/>
                <InputWhiteCommon title={"Документ"}/>
                <InputWhiteCommon title={"Серия и номер"} text={passDocSeriaNumber} setText={setPassDocSeriaNumber}/>
                <InputWhiteCommon title={"Срок действия"} text={passDocDate} setText={setPassDocDate}/>
           </div>
           <div className={s.common}>
                <p>Покупатель</p>
                <InputWhiteCommon title={"Фамилия"} text={buyerSurname} setText={setBuyerSurname}/>
                <InputWhiteCommon title={"Имя"} text={buyerName} setText={setBuyerName} />
                <InputWhiteCommon title={"Электронная почта"} text={buyerEmail} setText={setBuyerEmail}/>
                <InputWhiteCommon title={"Телефон"} text={buyerPhone} setText={setBuyerPhone}/>
           </div>
           <div className={s.common}>
                <p>{`${price}руб`}</p>
                <p>за одного пассажира</p>
                <hr/>
                <ButtonCustom text={"Войти"} onClick={onSubmit} />
           </div>
        </div>
    );
}

export default FillPassenger;