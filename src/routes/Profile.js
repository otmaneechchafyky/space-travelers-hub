import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rocketsList = useSelector((state) => state.rockets.rocketsList);
  const [rocketItems, setRocketItems] = useState([]);
  useEffect(() => {
    const reservedRockets = rocketsList.filter((rocket) => rocket.reserved === true);
    setRocketItems(reservedRockets);
  }, [rocketsList]);
  return (
    <div>
      <h2>My Rockets</h2>
      <ul>
        {rocketItems.map((item) => (
          <li key={item.id}>{item.rocket_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
