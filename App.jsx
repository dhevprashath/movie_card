import './Css/App.css';

import Homepage from './Pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Favorites from './Pages/Favorites';

function App() {
  const MovieNumber = 1; 

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
