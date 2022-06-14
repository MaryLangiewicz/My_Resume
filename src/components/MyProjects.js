import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";
import gallery8 from "../images/gallery8.jpg";
import gallery9 from "../images/gallery9.jpg";


function MyProjects() {
    return <div className="gallery">
        <h4 className="gallery-title"> My Projects</h4>
        <div className="gallery-img">
            <img className="gallery-item gallery__item1"
                 alt=""
                 src={gallery1}
                 width="30%"
                 height="auto"
            />{' '}


            <img className="gallery-item gallery__item2"
                 alt=""
                 src={gallery2}
                 width="30%"
                 height="auto"
            />{' '}

            <img className="gallery-item gallery__item3"
                 alt=""
                 src={gallery3}
                 width="30%"
                 height="auto"
            />{' '}


            <img className="gallery-item gallery__item4"
                 alt=""
                 src={gallery4}
                 width="30%"
                 height="auto"
            />{' '}


            <img className="gallery-item gallery__item5"
                 alt=""
                 src={gallery5}
                 width="30%"
                 height="auto"
            />{' '}


            <img className="gallery-item gallery__item6"
                 alt=""
                 src={gallery6}
                 width="30%"
                 height="auto"
            />{' '}


            <img className="gallery-item gallery__item7"
                 alt=""
                 src={gallery7}
                 width="30%"
                 height="auto"
            />{' '}


            <img className="gallery-item gallery__item8"
                 alt=""
                 src={gallery8}
                 width="30%"
                 height="auto"
            />{' '}


            <img className="gallery-item gallery__item9"
                 alt=""
                 src={gallery9}
                 width="30%"
                 height="auto"
            />{' '}
        </div>
    </div>
}

export default MyProjects;