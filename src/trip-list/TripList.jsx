import s from './TripList.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import TripItem from './trip-item/TripItem';

const TripList = (props) => {

    const [trips, setTrips] = useState([]);
    const [choosedTripId, setChoosedTripId] = useState();

    const navigator = useNavigate();



    const getTrips = () => {
        var token = JSON.parse(localStorage.getItem('user')).accessToken;

        console.log(token);
        axios({
            method: 'post',
            url: `http://localhost:5024/api/Trip/get/all`,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "accessToken": token,
            },
            data: {
                beginDate: "2024-12-21T15:06:17.268Z",
                endDate: "2024-12-20T15:06:17.268Z",
                cityId: 0
            }
        }).then((data) => {
            console.log(data.data);
            setTrips(data.data);
            //localStorage.setItem('user', JSON.stringify(user.data));
            //navigator("/welcome");
        }).catch((err) => { alert(err?.response?.data?.detail ?? "Ошибка"); console.error(err); });
    }

    const nextQuestion = () => {
        navigator("/fill-passenger");
    } 

    useEffect(() => {
        getTrips();
    }, []);

    const onTHotelChoose = (e, id) => {
        setChoosedTripId(id);
        console.log(id);
    }

    return (
        <div className={s.wrapper}>
            <div>
                {`Найдено ${trips?.length} билетов`}
                {
                    trips?.map((d) => <div onClick={(e, indx) => onTHotelChoose(e, d.id)}><TripItem trip={d} /></div>)
                }
                <div className={s.btnWrapper}>
                    <ButtonCustom text={"Далее"} onClick={nextQuestion} disabled={!choosedTripId}/>
                </div>
            </div>
        </div>
    );
}

export default TripList;