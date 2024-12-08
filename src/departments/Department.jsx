import { Button, Col, Row, Table } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './Department.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DepartmentModal from './modal/DepartmentModal';

function Department() {

    const [departments, setDepartments] = useState([]);
    const [modalShowDepartments, setModalShowDepartments] = useState();


    const getAll = () => {
        axios.get('http://localhost:5064/api/Department/get/all')
            .then(function (response) {
                console.log(response);
                setDepartments(response.data ?? []);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getAll();
    }, []);

    const onAddButtonClick = () => {
        setModalShowDepartments(true);
    }

    const onEditButtonClick = () => {
        setModalShowDepartments(true);
    }

    const onDeleteButtonClick = () => {
        //setModalShowDepartments(true);
    }

    return (
        <div className={s.wrapper}>
            <h2>Управление отделами</h2>
            <div className={s.crudButtonWrapper}>
                <Button className={s.crudButton} variant="primary" onClick={onAddButtonClick}>Добавить</Button>
                <Button className={s.crudButton} variant="warning" onClick={onEditButtonClick}>Изменить</Button>
                <Button className={s.crudButton} variant="danger" onClick={onDeleteButtonClick}>Удалить</Button>
            </div>
            <DepartmentModal show={modalShowDepartments}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Название</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map((department, key) => {
                            return (
                                <tr>
                                    <td>{department.id}</td>
                                    <td>{department.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            
        </div>
    );
}

export default Department;