import React from 'react';
import { useSelector } from 'react-redux';
import MissionsEntry from '../components/missions/missionEntry';

const Missions = () => {
  const missions = useSelector((store) => store.missions.missions);

  return (
    <div>
      <h2>Missions</h2>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
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
