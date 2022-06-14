import {Link} from 'react-router-dom';
import logo from "../images/logo.png";

function Header() {
    return (
        <>
            <header>
                <div className="page-header">
                    <div className="header-logo">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block "
                        />{' '}
                        <span className="page-header-logo__name">MARIA</span>
                        <span className="page-header-logo__surname">LANGIEWICZ</span>
                    </div>
                    <div className="page-menu">
                        <ul className="page-menu__list">
                            <li className="page-menu__item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="page-menu__item">
                                <Link to="/about"> About</Link>
                            </li>
                            <li className="page-menu__item">
                                <Link to="/services">Services</Link>
                            </li>
                            <li className="page-menu__item">
                                <Link to="/projects"> Projects</Link>
                            </li>
                            <li className="page-menu__item">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;