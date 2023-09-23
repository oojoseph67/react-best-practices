const RolesViews = {
  GUEST: GuestView,
  ADMIN: AdminView,
  CONTRIBUTOR: ContributorView,
};

const UserView = ({ role }) => {
  const CurrentView = RolesViews[role] ?? DefaultView;

  return (
    <div>
      <CurrentView />
    </div>
  );
};
