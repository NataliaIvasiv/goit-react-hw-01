import css from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.FriendList}>
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
}

export default FriendList;