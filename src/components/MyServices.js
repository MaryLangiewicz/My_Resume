import Button from "react-bootstrap/Button";

import iconsCard from "../images/iconsCard.jpg";


function MyServices() {
    return (
        <div className="card-container">
            <div className="card-box">
                <h3 className="card-title">WHAT I DO</h3>
                <Button className="btn btn-primary">SERVICE 1</Button>
                <Button className="btn btn-secondary">SERVICE 2</Button>
            </div>

            <div className="card-content">
                <div className="section section__content1">
                    <img className="icon"
                         alt=""
                         src={iconsCard}
                         width="30"
                         height="30"
                    />{' '}
                    <div className="section-content1">
                        <p className="section-title">Card title 1</p>
                        <p>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>

                <div className="section section__content2">
                    <img className="icon"
                         alt=""
                         src={iconsCard}
                         width="30"
                         height="30"
                    />{' '}
                    <div className="section-content">
                        <p className="section-title">Card title 2</p>
                        <p>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>

                <div className="section section__content3">
                    <img className="icon"
                         alt=""
                         src={iconsCard}
                         width="30"
                         height="30"
                    />{' '}
                    <div className="section-content">
                        <p className="section-title">Card title 3</p>
                        <p>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyServices;