import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

function SignUp({onClick}) {
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
            maxLength: 50,
            //pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.email?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.email?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.email?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Password</label>
        <input 
        type="password"
        {...register("password", {  })} />
        <input type="submit" />
      </form>

    </div>
  );
}

export default SignUp;
