import { Button, Col, Row, Table } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './User.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserModal from './modal/UserModal';

function User() {

    const [users, setUsers] = useState([]);
    const [modalShowUsers, setModalShowUsers] = useState();


    const getAll = () => {
        axios.get('http://localhost:5064/api/User/get/all')
            .then(function (response) {
                console.log(response);
                setUsers(response.data ?? []);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getAll();
    }, []);

    const onAddButtonClick = () => {
        setModalShowUsers(true);
    }

    const onEditButtonClick = () => {
        setModalShowUsers(true);
    }

    const onDeleteButtonClick = () => {
        //setModalShowUsers(true);
    }

    return (
        <div className={s.wrapper}>
            <h2>Управление пользователями</h2>
            <div className={s.crudButtonWrapper}>
                <Button className={s.crudButton} variant="primary" onClick={onAddButtonClick}>Добавить</Button>
                <Button className={s.crudButton} variant="warning" onClick={onEditButtonClick}>Изменить</Button>
                <Button className={s.crudButton} variant="danger" onClick={onDeleteButtonClick}>Удалить</Button>
            </div>
            <UserModal show={modalShowUsers}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Права</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, key) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.name}</td>
                                    <td>{user.patronymic}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            
        </div>
    );
}

export default User;