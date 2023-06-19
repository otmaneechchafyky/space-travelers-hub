import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import NotMatch from './routes/NotMatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Rockets" element={<Rockets />} />
          <Route path="Missions" element={<Missions />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
