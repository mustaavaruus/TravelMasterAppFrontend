import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import s from './BackCustom.module.css';
import { useState } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';

function BackCustom(props) {

    const navigate = useNavigate();
    
    return (
        <div className={s.wrapper} onClick={() => {navigate(-1)}}>
            <ArrowLeft /> назад
        </div>
    );
}

export default BackCustom;