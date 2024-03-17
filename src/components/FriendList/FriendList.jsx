import clsx from 'clsx';
import css from './FriendList.module.css'
const FriendListItem = ({ avatar, name, isOnline }) => {
    const userOnline = isOnline ? "Online" : "Offline";
    return (
        <div className={css.FriendListContainer}>
  <img className={css.FriendListImg} src={avatar} alt="Avatar" width="80" />
            <p className={css.FriendListName}>{name}</p>
            <p className={clsx(css.FriendListOnline,
                isOnline ? css.onLine : css.offLine)}>{userOnline}</p>
</div>
    )
}

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