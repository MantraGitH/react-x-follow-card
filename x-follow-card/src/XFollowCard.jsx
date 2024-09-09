// eslint-disable-next-line react/prop-types
export function XFollowCard({ children, userName, isFollowing }) {
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing ? "x-followCard-button is-Following" : "x-followCard-button"
  return (
    <article className="x-followCard">
      <header className="x-followCard-header">
        <img
          className="x-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt=""
        />
        <div className="x-followCard-info">
          <strong>{children}</strong>
          <span className="x-followCard-infoUserName ">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName}>{text}</button>
      </aside>
    </article>
  );
}
