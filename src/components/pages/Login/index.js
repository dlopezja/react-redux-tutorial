import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

function SignUp({ onClick }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="form-group">
      <h1> Log in to your Warehouse </h1>
      <form onSubmit={handleSubmit(onClick)}>
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Za-z0-9._%+-]+@jala-foundation\.org$/g,
          })}
        />
        {errors?.email?.type === "required" && <p>This field is required</p>}
        {errors?.email?.type === "pattern" && <p>This is not a valid email</p>}
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        {errors?.password?.type === "required" && <p>This field is required</p>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUp;
