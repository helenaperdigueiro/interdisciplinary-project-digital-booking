import './style.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const { user, setUser } = useUserContext();

    if (user) {
        return (
            <Navbar id="header" className="fixed-top px-3 d-flex" collapseOnSelect expand="md" bg="light" variant="light">
                <Navbar.Brand as={Link} to="/"><img id="logo" src="https://cdn-icons-png.flaticon.com/512/1659/1659303.png" alt="logo" /></Navbar.Brand>
                <Nav.Link className="p-0 me-auto" as={Link} to="/"><div id="moto"><p>feels like</p><b> home.</b></div></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
      <FontAwesomeIcon
        icon={faBars} color="#3ba9c2" size="lg"
      /></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link className="d-flex align-items-center" as={Link} to="/"><div id="avatar" className="me-1">CH</div><p className="m-0">Olá, Carol!</p></Nav.Link>
                        <Nav.Link as={Link} to="/"><button onClick={() => {
                            localStorage.removeItem('signed');
                            setUser();
                        }}
                            className="access logout">Sair</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    return (
        <Navbar className="fixed-top px-3" collapseOnSelect expand="md" bg="light" variant="light">
            <Navbar.Brand className="me auto" as={Link} to="/"><img id="logo" src="https://cdn-icons-png.flaticon.com/512/1659/1659303.png" alt="logo" /></Navbar.Brand>
            <Nav.Link className="p-0 me-auto" as={Link} to="/"><div id="moto"><p>feels like</p><b> home.</b></div></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav d-flex" className="justify-content-end">
                <Nav >
                    <Nav.Link as={Link} to="/login"><button className="access">login</button></Nav.Link>
                    <Nav.Link as={Link} to="/registro"><button className="access">registrar</button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;