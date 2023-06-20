// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchRockets } from '../redux/rockets/rockets.slice';

// const Rockets = () => {
//   const RocketsList = useSelector((store) => store.Rockets.RocketsList);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchRockets());
//   }, [dispatch]);

//     <div>
//       <section>
//         {RocketsList[0]}
//         ;
//       </section>
//     </div>;
// };

// export default Rockets;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets.slice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((state) => state.rockets.rocketsList);
  const loading = useSelector((state) => state.rockets.loading);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {rocketsList.map((rocket) => (

          <li key={rocket.id}>
            <img src={rocket.flickr_images} alt={rocket.rocket_name} />
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default Rockets;
