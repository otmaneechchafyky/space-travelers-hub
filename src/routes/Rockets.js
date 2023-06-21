import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReserve } from '../redux/rockets/rocketsSlice';

const Rockets = ({ rocketsList }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.rockets.loading);

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

Rockets.propTypes = {
  rocketsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      flickr_images: PropTypes.string.isRequired,
      rocket_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Rockets;
