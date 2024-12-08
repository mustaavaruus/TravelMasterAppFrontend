import React from 'react';
import s from './Footer.module.css';


export const Footer = (props) => {
  return (
    <footer className={`page-footer font-small blue pt-4 ${s.main}`}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Оптимизация процессов предприятия</h5>
                <p>Управление сетью столовых</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Полезные ресурсы</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Ссылка 1</a></li>
                    <li><a href="#!">Ссылка 2</a></li>
                    <li><a href="#!">Ссылка 3</a></li>
                    <li><a href="#!">Ссылка 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Связь с нами</h5>
                <ul className="list-unstyled">
                    <li><a href="tel:+70011001010">+7(001)100-10-10</a></li>
                    <li><a href="mailto:email@email.com">email@email.com</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright:
        <a href="#!"> ME!</a>
    </div>

</footer>
  );
}

export default Footer;