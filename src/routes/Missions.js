import React from 'react';
import { useSelector } from 'react-redux';
import MissionsEntry from '../components/missions/missionEntry';
import missionStyles from '../style/Missions.module.css';

const Missions = () => {
  const missions = useSelector((store) => store.missions.missions);

  return (
    <div className={missionStyles.missionsWrapper}>
      <table className={missionStyles.missionsTable}>
        <thead className={missionStyles.missionsTable}>
          <tr>
            <th className={missionStyles.columnTitle} style={{ borderRight: '1px solid #eceef0' }}>Mission</th>
            <th className={missionStyles.columnTitle} style={{ borderRight: '1px solid #eceef0' }}>Description</th>
            <th className={missionStyles.columnTitle} style={{ borderRight: '1px solid #eceef0' }}>Status</th>
            <th className={missionStyles.columnTitle}>Action</th>
          </tr>
        </thead>
        <tbody className={missionStyles.tableContent}>
          {missions.map((mission) => (
            <MissionsEntry
              key={mission.mission_name}
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
