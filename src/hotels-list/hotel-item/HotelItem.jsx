import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import s from './HotelItem.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Check, Star, StarFill } from 'react-bootstrap-icons';


const HotelItem = (props) => {

    const [tour, setTour] = useState(props.tour);

    useEffect(() => {
        console.log(props.answerText);
        setTour(props.tour);
        console.log(props.tour);
    }, [props.tour]);


    return (
        <div className={s.wrapper}>
            <div className={s.pic}>
                <div className={s.rightWrapper}>
                        {`${tour?.cityName}, ${tour?.countryName}`}
                    <br/>
                        от {`${tour?.price}`} руб.
                    <br/>
                    {
                            (() => {
                                const stars = [];

                                for (let i = 0; i < tour?.stars; i++) {
                                    stars.push(
                                        <StarFill className={s.starWrapper} />
                                    );
                                }
                                return stars;
                        })()}
                    <p>{tour?.description}</p>
                    {}
                </div>
                {<Image src={tour?.image} className={s.imgWrapper}/>}
            </div>
        </div>
    );
}

export default HotelItem;