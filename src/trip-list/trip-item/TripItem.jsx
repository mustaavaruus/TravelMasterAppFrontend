import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import s from './TripItem.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Check, Star, StarFill } from 'react-bootstrap-icons';


const TripItem = (props) => {

    const [trip, setTrip] = useState(props.trip);

    useEffect(() => {
        console.log(props.answerText);
        setTrip(props.trip);
        console.log(props.trip);
    }, [props.trip]);


    return (
        <div className={s.wrapper}>
                <div>
                    <Row>
                        <Col>
                            <p className={s.baldText}>{`${trip?.price}`} руб.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className={s.ordinalText}>{`${trip?.beginDt1} - ${trip?.endDt1}`}</p>
                        </Col>
                        <Col>
                            <p className={s.ordinalText}>{`${trip?.transferCount1} пересадка`}</p>
                        </Col>
                        <Col>
                            <p className={s.ordinalText}>{`${trip?.duration1}ч в пути`}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className={s.slimText}>{`${trip?.cityAlias1} - ${trip?.cityAlias2}`}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className={s.slimText}>{`Добавить багаж +${trip?.luggagePrice1}`}</p>
                        </Col>
                        <Col>
                            <p className={s.slimText}>{`TODO: checkbox`}</p>
                        </Col>
                    </Row>
                </div>
        </div>
    );
}

export default TripItem;