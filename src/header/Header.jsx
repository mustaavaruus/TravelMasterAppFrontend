import { House, Person } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import s from './Header.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';

function Header() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    let usr = localStorage.getItem('user');
    console.log(usr);
    if (!!usr) {
      setUser(JSON.parse(usr))
    }

  }, []);

  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  }

  if (!!user && user.role == 2) {
    return (
      <Navbar expand="lg" className={s.main}>
        <Container className={s.main}>
          <Navbar.Brand className={s.iconWrapper} href="/">Столовая</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={s.link} href="/"><House /></Nav.Link>
              <Nav.Link className={s.link} href="/tickets">Заявки</Nav.Link>
              <Nav.Link className={s.link} href="/departments">Отделы</Nav.Link>
              <Nav.Link className={s.link} href="/products">Продукты</Nav.Link>
              <Nav.Link className={s.link} href="/providers">Поставщики</Nav.Link>
              <Nav.Link className={s.link} href="/users">Пользователи</Nav.Link>
              <Nav.Link className={s.link} href="/auth">Авторизация</Nav.Link>
              <Nav.Link className={s.link} onClick={logOut}>Выйти</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {


    return (
      <Navbar expand="lg" className={s.main}>
        <Container className={s.main}>
          <Navbar.Brand className={s.iconWrapper} href="/">Столовая</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={s.link} href="/"><House /></Nav.Link>
              <Nav.Link className={s.link} href="/tickets">Заявки</Nav.Link>
              <Nav.Link className={s.link} href="/auth">Авторизация</Nav.Link>
              <Nav.Link className={s.link} onClick={logOut}>Выйти</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;