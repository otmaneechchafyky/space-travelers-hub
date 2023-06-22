import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import profileStyles from '../../style/Profile.module.css';

const MissionsCard = () => {
  const missionsData = useSelector((store) => store.missions.missions);
  const [activeMissions, setActiveMissions] = useState(missionsData);

  useEffect(() => {
    setActiveMissions(missionsData.filter((mission) => mission.active === true));
  }, [missionsData]);

  return (
    <div className={profileStyles.card}>
      <h2 className={profileStyles.header}>My Missions</h2>
      <ul className={profileStyles.profileLists}>
        {activeMissions.map((mission) => (
          <li
            className={profileStyles.item}
            key={mission.mission_id}
          >
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionsCard;
