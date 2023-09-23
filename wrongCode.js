const UserView = ({ role }) => {
  return (
    <div>
      {role === "Admin" ? (
        <AdminView />
      ) : role === "Guest" ? (
        <GuestView />
      ) : (
        <ContributorView />
      )}
    </div>
  );
};
