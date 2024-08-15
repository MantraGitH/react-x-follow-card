// eslint-disable-next-line react/prop-types
export function XFollowCard({ formatUserName, userName, name, isFollowing }) {
  console.log(isFollowing);
  return (
    <article className="x-followCard">
      <header className="x-followCard-header">
        <img
          className="x-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt=""
        />
        <div className="x-followCard-info">
          <strong>{name}</strong>
          <span className="x-followCard-infoUserName ">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className="x-followCard-button">Follow</button>
      </aside>
    </article>
  );
}
