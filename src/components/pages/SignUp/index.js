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
      <h1> Sign Up</h1>
      <form onSubmit={handleSubmit(onClick)}>
        <label>Name</label>
        <input
          placeholder="name"
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.name?.type === "required" && <p>This field is required</p>}
        {errors?.name?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.name?.type === "pattern" && <p>Not a valid email</p>}
        <label>Email</label>

        <input
          placeholder="email"
          {...register("email", {
            pattern: /^[A-Za-z0-9._%+-]+@jala-foundation\.org$/g,
          })}
        />
        {errors?.email?.type === "pattern" && <p>Invalid email</p>}
        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{10,}$/i,
          })}
        />
        {/*Minimum eight characters, at least one uppercase letter, one lowercase letter and one number*/}
        {errors?.password?.type === "pattern" && <p>Invalid Password</p>}
        {errors?.password?.type === "required" && <p>This field is required</p>}
        <input type="submit" />
      </form>
      <button onClick={() => console.log(localStorage.getItem("reduxState"))}>
        Check the store
      </button>
    </div>
  );
}

export default SignUp;
