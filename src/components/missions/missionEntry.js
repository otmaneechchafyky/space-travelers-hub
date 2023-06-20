import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const MissionsEntry = ({ mission }) => {
  const dispatch = useDispatch();
  const missionData = mission;
  const [status, setStatus] = useState('');
  const [action, setAction] = useState('');
  const [isActive, setIsActive] = useState();

  const checkStatus = () => {
    if (missionData.active === true) {
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
      dispatch(joinMission(missionData.mission_id));
      setStatus('Active Member');
      setAction('Leave Mission');
    } else {
      dispatch(leaveMission(missionData.mission_id));
      setStatus('Not A member');
      setAction('Join Mission');
    }
  };

  useEffect(() => {
    checkStatus();
  }, [action, status, isActive]);
  return (
    <tr>
      <td>{missionData.mission_name}</td>
      <td>{missionData.description}</td>
      <td>
        {status}
      </td>
      <td>
        <button type="button" id={missionData.mission_id} onClick={handleStatusAction}>
          {action}
        </button>
      </td>
    </tr>
  );
};

MissionsEntry.propTypes = {
  mission: PropTypes.shape({}).isRequired,
};

export default MissionsEntry;