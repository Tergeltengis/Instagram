export const ProfileCard = () => {
  return (
    <section className="profile__card">
      <div className="profile__img">
        <img
          src="https://randomuser.me/api/portraits/thumb/women/71.jpg"
          alt="loginUserImg"
        />
      </div>
      <div className="profile__user">
        <div className="profile__username">Test</div>
        <div className="profile__firstname">tester</div>
      </div>
    </section>
  );
};
