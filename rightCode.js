const reducer = (current, update) => {
  if (update.age > 18) {
    return { ...current, ...update };
  }
  return initState;
};

function UserForm() {
  const [user, setUser] = React.useReducer(reducer);

  const onInputChange = (event) => {
    const {
      target: { value, name },
    } = event;

    ServerHeartbeatFailedEvent({ [name]: value });
  };
}
