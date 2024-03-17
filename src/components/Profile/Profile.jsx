import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profile}>
  <div className={css.profileImgContainer}>
    <img className={css.profileImg}
      src={image}
            alt="User avatar"
            width='300'
    />
    <p className={css.profileName}>{name}</p>
    <p className={css.profileTag}>@{tag}</p>
    <p className={css.profileTag}>{location}</p>
  </div>

  <ul className={css.profileStatsList}>
    <li className={css.profileStatsItem}>
      <span>Followers</span>
                    <span className={css.profileStatsItemSpan}>{stats.followers}</span>
    </li>
    <li className={css.profileStatsItem}>
      <span>Views</span>
                    <span className={css.profileStatsItemSpan}>{stats.views}</span>
    </li>
    <li className={css.profileStatsItem}>
      <span>Likes</span>
                    <span className={css.profileStatsItemSpan}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile;