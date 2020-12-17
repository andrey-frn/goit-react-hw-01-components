import PropTypes from 'prop-types';
import FriensListItem from './friendlistitem';
import s from './friendlist.module.css';

function FriensList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriensListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriensList;

FriensList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequried,
    }),
  ),
};
