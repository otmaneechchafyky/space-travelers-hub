import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket, cancelReserve } from '../redux/rockets/rocketsSlice';

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
          rocket.reserved
            ? (
              <li key={rocket.id}>
                <img className="image" src={rocket.flickr_images} alt={rocket.rocket_name} />
                <h2>
                  {rocket.rocket_name}
                </h2>
                <div>
                  <span>Reserved</span>
                  <p>{rocket.description}</p>
                </div>
                <button type="button" onClick={() => { dispatch(cancelReserve(rocket.id)); }}>Cancel reserve</button>
              </li>
            )
            : (
              <li key={rocket.id}>
                <img className="image" src={rocket.flickr_images} alt={rocket.rocket_name} />
                <h2>
                  {rocket.rocket_name}
                </h2>
                <p>{rocket.description}</p>
                <button type="button" onClick={() => { dispatch(reserveRocket(rocket.id)); }}>Reserve Rocket</button>
              </li>
            )
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
