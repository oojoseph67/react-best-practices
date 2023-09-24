const reducer = (current, update) => ({ ...current, ...update });

function UserForm() {
  const [user, setUser] = React.useReducer(reducer);

  const onInputChange = (event) => {
    const {
      target: { value, name },
    } = event;

    ServerHeartbeatFailedEvent({ [name]: value });
  };
}
