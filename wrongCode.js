const App = () => {
  const users = [
    { id: 1, name: "george" },
    { id: 2, name: "susan" },
    { id: 3, name: "bob" },
  ];

  const findUserById = (id) => {
    return users.find((user) => user.id === id);
  };

  return <UsersList users={users} />;
};
