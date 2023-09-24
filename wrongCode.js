function UserForm() {
  const [user, setUser] = React.useState({
    name: "",
    age: "",
    email: "",
    occupation: "",
  });

  const onInputChange = (event) => {
    const {
      target: { value, name },
    } = event;
    
      setUser((prevState) => ({ ...prevState, [name]: value }))
  };
}
