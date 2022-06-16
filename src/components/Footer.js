import {Link} from 'react-router-dom';
import logo from "../images/logo.png";

function Footer() {
    return (
        <>
            <header>
                <div className="page-footer">
                    <div className="footer-logo">
                        <img
                            alt=""
                            src={logo}
                            width="20"
                            height="20"
                            className="d-inline-block "
                        />{' '}
                        <span className="page-footer-logo__name">Maria</span>
                        <span className="page-footer-logo__surname">Langiewicz</span>
                    </div>
                    <div className="page-footer">
                        <ul className="page-footer footer__list">
                            <li className="footer__item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/about"> About</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/services">Services</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/projects"> Projects</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Footer;