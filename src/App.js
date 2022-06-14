import './App.css';
import Main from './Main';
import AboutMeMain from './AboutMeMain.js';
import MyServicesMain from "./MyServicesMain";
import MyProjectsMain from "./MyProjectsMain";
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
import MyServices from "./components/MyServices";



function App() {
  return (
      <HashRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/about" element={<AboutMeMain/>}/>
            <Route path="/services" element={<MyServicesMain/>}/>
            <Route path="/projects" element={<MyProjectsMain/>}/>
        </Routes>
      </HashRouter>
  )
}
export default App;