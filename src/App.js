import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import Profile from './routes/Profile';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import NotMatch from './routes/NotMatch';
import "./App.css";
import { fetchMissions } from './redux/missions/missionsSlice';
import LandingPage from './routes/LandingPage';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />
          <Route
            path="/protected"
            element={(
              <>
                <SignedIn>
                  <Layout />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            )}
          />
          <Route path="/protected" element={<Layout />}>
            <Route path="Rockets" element={<Rockets />} />
            <Route path="profile" element={<Profile />} />
            <Route path="Missions" element={<Missions />} />
            <Route path="*" element={<NotMatch />} />
          </Route>
        </Routes>
      </div>
    </ClerkProvider>
  );
}

export default App;
