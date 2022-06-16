import './App.css';
import Main from './Main';
import AboutMeMain from './AboutMeMain.js';
import MyServicesMain from "./MyServicesMain";
import MyProjectsMain from "./MyProjectsMain";
import ContactFormMain from "./ContactFormMain";
import './sass/main.scss';
import {
  HashRouter,
  Route,
  Routes,
  Router,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Footer from "./components/Footer";




function App() {
  return (
      <HashRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/about" element={<AboutMeMain/>}/>
            <Route path="/services" element={<MyServicesMain/>}/>
            <Route path="/projects" element={<MyProjectsMain/>}/>
          <Route path="/contact" element={<ContactFormMain/>}/>
          <Route index element={<Footer />} />
        </Routes>
      </HashRouter>
  )
}
export default App;