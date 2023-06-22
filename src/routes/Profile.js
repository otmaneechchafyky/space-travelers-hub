import React from 'react';
import ReservedRockets from '../components/ReservedRockets';
import MissionsCard from '../components/myProfile/MissionsCard';

const Profile = () => (
  <div className="profile-container">
    <MissionsCard />
    <ReservedRockets />
  </div>
);

export default Profile;
