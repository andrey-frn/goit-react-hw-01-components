import PropTypes from 'prop-types';
import s from './friendlist.module.css';

const FriensListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.isOnline}></span>
      ) : (
        <span className={s.isOffline}></span>
      )}

      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
export default FriensListItem;

FriensListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
