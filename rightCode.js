const App = () => {
  const users = {
    ids: ["1", "2", "3"],
    entities: {
      1: { id: 1, name: "george" },
      2: { id: 2, name: "susan" },
      3: { id: 3, name: "bob" },
    },
  };
  const findUserById = (id) => {
    return users.find((user) => user.id === id);
  };

  return <UsersList users={users} />;
};
