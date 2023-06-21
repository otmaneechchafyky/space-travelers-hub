import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import profileStyles from './Profile.module.css';

const MissionsCard = () => {
  const missionsData = useSelector((store) => store.missions.missions);
  const [activeMissions, setActiveMissions] = useState(missionsData);

  useEffect(() => {
    setActiveMissions(missionsData.filter((mission) => mission.active === true));
  }, [missionsData]);

  return (
    <div className={profileStyles.missionsCard}>
      <h2 className={profileStyles.missionsHeader}>My Missions</h2>
      <ul className={profileStyles.missionsList}>
        {activeMissions.map((mission) => (
          <li
            className={profileStyles.mission}
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
