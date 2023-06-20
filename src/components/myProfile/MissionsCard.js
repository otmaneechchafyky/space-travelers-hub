import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MissionsCard = () => {
  const missionsData = useSelector((store) => store.missions.missions);
  const [activeMissions, setActiveMissions] = useState(missionsData);

  useEffect(() => {
    setActiveMissions(missionsData.filter((mission) => mission.active === true));
  }, [missionsData]);

  return (
    <div>
      <h2>My Missions</h2>
      <ul>
        {activeMissions.map((mission) => (
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MissionsCard;
