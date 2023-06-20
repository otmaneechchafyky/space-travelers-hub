import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './routes/Layout';
import Profile from './routes/Profile';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import NotMatch from './routes/NotMatch';
import './App.css';
import { fetchMissions } from './redux/missions/missionsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Rockets" element={<Rockets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Missions" element={<Missions />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
