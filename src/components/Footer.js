import Navbar from 'react-bootstrap/Navbar';
import {Container} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import logo from "../images/logo.png";
function Footer (){
    return (
        <>
            <footer className="footer">
               <div >
                   <div>
                       <Nav className="justify-content align-content-end" activeKey="/home">
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
                   </div>

               </div>
            </footer>
        </>
    )
}

export default Footer;