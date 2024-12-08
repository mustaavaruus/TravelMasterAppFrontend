import { Button, Col, Row, Table } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './Providers.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProviderModal from './modal/ProviderModal';

function Provider() {

    const [providers, setProviders] = useState([]);
    const [modalShowProviders, setModalShowProviders] = useState();


    const getAll = () => {
        axios.get('http://localhost:5064/api/Provider/get/all')
            .then(function (response) {
                console.log(response);
                setProviders(response.data ?? []);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getAll();
    }, []);

    const onAddButtonClick = () => {
        setModalShowProviders(true);
    }

    const onEditButtonClick = () => {
        setModalShowProviders(true);
    }

    const onDeleteButtonClick = () => {
        //setModalShowProviders(true);
    }

    return (
        <div className={s.wrapper}>
            <h2>Управление продуктами</h2>
            <div className={s.crudButtonWrapper}>
                <Button className={s.crudButton} variant="primary" onClick={onAddButtonClick}>Добавить</Button>
                <Button className={s.crudButton} variant="warning" onClick={onEditButtonClick}>Изменить</Button>
                <Button className={s.crudButton} variant="danger" onClick={onDeleteButtonClick}>Удалить</Button>
            </div>
            <ProviderModal show={modalShowProviders}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Наименование</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        providers.map((provider, key) => {
                            return (
                                <tr>
                                    <td>{provider.id}</td>
                                    <td>{provider.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            
        </div>
    );
}

export default Provider;