import React from "react";
import { useForm } from "react-hook-form";

import "./styles.css";

function SignUp({ onClick }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //console.log(watch("alias")); // you can watch individual input by pass the name of the input
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
        {errors?.name?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Email</label>

        <input
          placeholder="email"
          {...register("alias", {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />
        {errors?.alias?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          {...register("password", {})}
        />

        <input type="submit" />
      </form>
      <button onClick={() => console.log(localStorage.getItem("reduxState"))}>
        Check the store
      </button>
    </div>
  );
}

export default SignUp;
