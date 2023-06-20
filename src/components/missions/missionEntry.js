import { useState } from 'react';

const MissionsEntry = ({mission}) => {
  const [status, setStatus] = useState('Not A member');
  const [action, setAction] = useState('Join Mission');
  const handleStatusAction = () => {};
  return (
    <tr>
        <td>{mission.mission_name}</td>
        <td>{mission.description}</td>
        <td>{status}</td>
        <td><button type="button" onClick={handleStatusAction}>{action}</button></td>
    </tr>
  )
};

export default MissionsEntry;
