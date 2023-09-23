export default function UserForm() {
  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData);

    console.log(values);
  };

  return (
    <form onSubmit={onSubmit}>
      <input id="email" type="email" name="email" required />
      <input id="password" type="password" name="password" required />
      <input id="submit" value="submit" />
    </form>
  );
}
