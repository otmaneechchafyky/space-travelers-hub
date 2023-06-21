import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import { fetchMissions } from './redux/missions/missionsSlice';
import Layout from './routes/Layout';
import Profile from './routes/Profile';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import NotMatch from './routes/NotMatch';
import './App.css';

function App() {
  const rocketsList = useSelector((state) => state.rockets.rocketsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="Rockets"
            element={<Rockets rocketsList={rocketsList} />}
          />
          <Route path="profile" element={<Profile />} />
          <Route path="Missions" element={<Missions />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
