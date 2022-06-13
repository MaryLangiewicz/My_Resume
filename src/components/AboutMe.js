import ProgressBar from 'react-bootstrap/ProgressBar'
import "../sass/aboutme.scss";
function AboutMe(){
    return(
        <div>
        <div className="title">
           <h2 >WELCOME TO MY WEBSITE</h2>
        </div>
           <div className="skills-container">
               <div className="react">
                   <p>REACT</p>
                   <ProgressBar striped variant="success" now={40} />
               </div>
               <div className="javascript">
               <p>JAVASCRIPT</p>
               <ProgressBar striped variant="info" now={20} />
               </div>
                   <div className="sass">
               <p>SASS</p>
               <ProgressBar striped variant="warning" now={60} />
                   </div>
                       <div className="html">
               <p>HTML</p>
               <ProgressBar striped variant="danger" now={80} />
                       </div>
           </div>
        </div>
    )
}

export default AboutMe;