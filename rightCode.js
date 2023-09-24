import { z } from "zod";

const Pass = z.object({
  password: z.string().regex(/^()/, "Follow the password structure"),
});

export default function Form() {
  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData);
    console.log("Submitted: ", values);
  };

  try {
    Pass.parse(values);
  } catch (error) {
    const errors = error.flatten().fieldErrors;
    const passwordInput = document.getElementById("password");
    passwordInput.setCustomValidity(errors["password"][o]);
    passwordInput.reportValidity();
  }
}

return (
  <form onSubmit={onSubmit} noValidate>
    <input required id="password" name="password" type="password" />
    <button type="submit">Send</button>
  </form>
);
