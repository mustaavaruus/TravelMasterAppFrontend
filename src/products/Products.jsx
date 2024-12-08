import { Button, Col, Row, Table } from 'react-bootstrap';
import Slider from '../slider/Slider';
import s from './Products.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductModal from './modal/ProductModal';

function Product() {

    const [products, setProducts] = useState([]);
    const [modalShowProducts, setModalShowProducts] = useState();


    const getAll = () => {
        axios.get('http://localhost:5064/api/Product/get/all')
            .then(function (response) {
                console.log(response);
                setProducts(response.data ?? []);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getAll();
    }, []);

    const onAddButtonClick = () => {
        setModalShowProducts(true);
    }

    const onEditButtonClick = () => {
        setModalShowProducts(true);
    }

    const onDeleteButtonClick = () => {
        //setModalShowProducts(true);
    }

    return (
        <div className={s.wrapper}>
            <h2>Управление продуктами</h2>
            <div className={s.crudButtonWrapper}>
                <Button className={s.crudButton} variant="primary" onClick={onAddButtonClick}>Добавить</Button>
                <Button className={s.crudButton} variant="warning" onClick={onEditButtonClick}>Изменить</Button>
                <Button className={s.crudButton} variant="danger" onClick={onDeleteButtonClick}>Удалить</Button>
            </div>
            <ProductModal show={modalShowProducts}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Наименование</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, key) => {
                            return (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            
        </div>
    );
}

export default Product;