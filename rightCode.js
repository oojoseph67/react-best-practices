import { z } from "zod";

const User = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function UserForm() {
  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData);

    try {
      User.parse(values);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors = err.flatten.fieldErrors;

        if (errors["email"]) {
          const emailInput = document.getElementById("email");
          emailInput.setCustomValidity(errors["email"][0]);
          emailInput.reportValidity();
        }
      }
    }
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <input id="email" type="email" name="email" required />
      <input id="password" type="password" name="password" required />
      <input id="submit" value="submit" />
    </form>
  );
}
