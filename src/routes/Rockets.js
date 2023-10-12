import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReserve } from '../redux/rockets/rocketsSlice';
import rocketStyles from '../style/Rockets.module.css';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets.rocketsList);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.rockets.loading);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <ul className={rocketStyles.container}>
      {rocketsList.map((rocket) => (
        rocket.reserved
          ? (
            <li key={rocket.id} className={rocketStyles.item}>
              <img className="image" src={rocket.flickr_images} alt={rocket.rocket_name} />
              <div className={rocketStyles.info}>
                <h2>
                  {rocket.rocket_name}
                </h2>
                <p className={rocketStyles.reservedBadgeCont}>
                  <span className={rocketStyles.reservedBadge}>Reserved</span>
                  {rocket.description}
                </p>
                <button type="button" onClick={() => { dispatch(cancelReserve(rocket.id)); }} className={rocketStyles.cancelBtn}>Cancel Reserve</button>
              </div>
            </li>
          )
          : (
            <li key={rocket.id} className={rocketStyles.item}>
              <img className="image" src={rocket.flickr_images} alt={rocket.rocket_name} />
              <div className={rocketStyles.info}>
                <h2>
                  {rocket.rocket_name}
                </h2>
                <p className={rocketStyles.reservedBadgeCont}>{rocket.description}</p>
                <button type="button" onClick={() => { dispatch(reserveRocket(rocket.id)); }} className={rocketStyles.reserveBtn}>Reserve Rocket</button>
              </div>
            </li>
          )
      ))}
    </ul>
  );
};

export default Rockets;
