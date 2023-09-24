import useForm from "react-hook-form";

export default function Form() {
  const { register, errors, handleSubmit } = useForm({
    defaultValue: {
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" placeholder="bluebilllll@gmail.com">
          Password:
          {error.password && (
            <span role="alert" className="spanError">
              {errors.password.message}
            </span>
          )}
        </label>

        <input
          name="password"
          type="password"
          ref={register({
            required: "Password is required",
            pattern: {
              value: /^()/,
              message: "Follow the password structure",
            },
          })}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
