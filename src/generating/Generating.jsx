import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './Generating.module.css';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
function Generating() {
    const navigate = useNavigate();

    const goToQuestions = () => {
        navigate("/question");
    }

    useEffect(() => {
        setTimeout(function () {
            navigate("/hotels-list");
        }, 4000);
    }, []);

    return (
        <div className={s.wrapper}>
            <Container>
                <br/><br/><br/><br/><br/>
                <Row>
                    <h3>Мы генерируем для вас  
                        <br/>лучшие туры!</h3>
                </Row>
                <div className={s.wrapper} >
                    <Image 
                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-3d-illustration-travel-around-the-world-by-plane-png-image_13002995.png"
                    width="400px" />
                </div>
            </Container>
        </div>
    );
}

export default Generating;