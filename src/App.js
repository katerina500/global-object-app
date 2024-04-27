import {Routes, Route, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Open from "./Open/Open";
import Close from "./Close/Close";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='router-nav-container'>
        <nav className='navigation-menu'>
          <div className='navigation-menu__container'>
            <div>
              <Link to="/home">Главная</Link>
            </div>
            <div>
              <Link to="/redirect">Вернуться</Link>
            </div>
            <div>
              <Link to="/open">Открыть</Link>
            </div>
            <div>
              <Link to="/close">Закрыть</Link>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/redirect" element={<Home />} />
        <Route path="/open" element={<Open />} />
        <Route path="/close" element={<Close />} />
      </Routes>
    </div>
  );
}

export default App;
