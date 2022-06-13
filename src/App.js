import './App.css';
import Main from './Main';
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


function App() {
  return (
      <HashRouter>
        <Routes>
          <Route index element={<Main />} />
          {/*<Route path="/contact" element={<ContactMain/>}/>*/}
          {/*<Route path="/about" element={<AboutUsMain/>}/>*/}
        </Routes>
      </HashRouter>

  )
}
export default App;