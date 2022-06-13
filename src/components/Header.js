import Navbar from 'react-bootstrap/Navbar';
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import logo from "../images/logo.png";

 function Header (){
    return (
        <>
        <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Maryia Langiewicz
                        </Navbar.Brand>
                    </Container>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link to="/home">HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1"> ABOUT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">SERVICES</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1"> PROJECTS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">CONTACT</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
        </header>
        </>
    )
}

export default Header;