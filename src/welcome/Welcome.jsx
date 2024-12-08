import { Col, Container, Image, Row } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './Welcome.module.css';
import ButtonCustom from '../elements/buttons/ButtomCustom';
import { useNavigate } from 'react-router';
function Welcome() {
    const navigate = useNavigate();

    const goToQuestions = () => {
        navigate("/question");
    }

    const goToGenerating = () => {
        navigate("/generating");
    }

    return (
        <div className={s.wrapper}>
            <Container>
                <div className={s.wrapper} xs={4} md={3}>
                    <Image src="https://static.vecteezy.com/system/resources/thumbnails/023/358/444/small_2x/landscape-consists-of-terraced-plateaus-with-multicolored-waterfalls-and-3d-floating-islands-ai-generated-png.png" roundedCircle />
                </div>
                <Row>
                    <h2>Добро пожаловать 
                        <br/>в МаршрутМастер!</h2>
                </Row>
                <br/><br/>
                <Row>
                    <div className={s.descriptionContainer}>
                        Приветствуем вас! Пройдите наш быстрый опрос, чтобы мы могли подобрать идеальный вариант отдыха
                        специально для вас. Экономьте своё время, избавьтесь от стресса принятия решений и получите уникальные 
                        персонализированные рекомендации для незабываемого отпуска! Начнем?
                    </div>
                </Row>
                <br/><br/>
                <Row>
                    <ButtonCustom text={"Пройти опрос"} onClick={goToQuestions} />
                </Row>
            </Container>
        </div>
    );
}

export default Welcome;