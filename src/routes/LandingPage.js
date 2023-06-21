import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
    <div className="w-full max-w-[600px] mx-auto">
      <h1 className="text-6xl mb-4">Welcome to SpaceX</h1>
      <p className="text-2xl text-white/60 mb-4">
        Enjoy the most immersive experience booking rockets, joining missions
        into the unknown!
      </p>
      <div>
        <Link to="/protected">
          <button
            type="button"
            className="bg-blue-600 px-4 py-2 rounded-lg text-xl"
          >
            get started
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default LandingPage;
