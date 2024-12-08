import { Card, Col, Image, Row } from 'react-bootstrap';
import s from './Gallery.module.css';
import MyCard from '../cards/MyCard';

function Gallery() {


    return (
        <div className={s.wrapper}>
            <Row>
                <Col xs={6} md={4}>
                    <MyCard src="https://i.ebayimg.com/images/g/BEYAAOSw5gVkT25f/s-l1200.jpg" />
                </Col>
                <Col xs={6} md={4}>
                    <MyCard src="https://v-pravda.ru/wp-content/uploads/2023/11/02t-4.jpg" thumbnail />
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                    <MyCard src="https://voleybol-rossii.ru/wp-content/uploads/2022/10/8eq7erm-gcw-2.jpg" />
                </Col>
                <Col xs={6} md={4}>
                    <MyCard src="https://vestidv.ru/wp-content/uploads/2024/01/24-01-17-a16.jpg" thumbnail />
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                    <MyCard src="https://gazetaznamya.ru/files/47/123/na-igrah-byvaet-i-tak-dva-myacha-na-voleybolnoy-ploschadke.jpg" />
                </Col>
                <Col xs={6} md={4}>
                    <MyCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4QE9MyRVcKVXaqGn5vjQ5x304DYjVMnMKA&s" thumbnail />
                </Col>
            </Row>
        </div>
    );
}

export default Gallery;