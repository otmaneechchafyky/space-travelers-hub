import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import profileStyles from '../style/Profile.module.css';

const ReservedRockets = () => {
  const rocketsList = useSelector((state) => state.rockets.rocketsList);
  const [rocketItems, setRocketItems] = useState([]);
  useEffect(() => {
    const reservedRockets = rocketsList.filter((rocket) => rocket.reserved === true);
    setRocketItems(reservedRockets);
  }, [rocketsList]);
  return (
    <div className={profileStyles.card}>
      <h2 className={profileStyles.header}>My Rockets</h2>
      <ul className={profileStyles.profileLists}>
        {rocketItems.map((item) => (
          <li className={profileStyles.item} key={item.id}>{item.rocket_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReservedRockets;
