import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const MissionsEntry = ({ mission }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState('');
  const [action, setAction] = useState('');
  const [isActive, setIsActive] = useState();

  const checkStatus = () => {
    if (mission.active === true) {
      setIsActive(true);
      setStatus('Active Member');
      setAction('Leave Mission');
    } else {
      setIsActive(false);
      setStatus('Not A member');
      setAction('Join Mission');
    }
  };

  const handleStatusAction = () => {
    if (!isActive) {
      dispatch(joinMission(mission.mission_id));
      setStatus('Active Member');
      setAction('Leave Mission');
    } else {
      dispatch(leaveMission(mission.mission_id));
      setStatus('Not A member');
      setAction('Join Mission');
    }
  };

  useEffect(() => {
    checkStatus();
  }, [action]);
  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        {status}
      </td>
      <td>
        <button type="button" id={mission.mission_id} onClick={handleStatusAction}>
          {action}
        </button>
      </td>
    </tr>
  );
};

export default MissionsEntry;
