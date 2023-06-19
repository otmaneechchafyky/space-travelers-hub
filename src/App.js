import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
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
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="Rockets" element={<Rockets />} />
            <Route path="Missions" element={<Missions />} />
            <Route path="*" element={<NotMatch />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
