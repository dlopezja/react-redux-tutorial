import React from "react";
import { useForm } from "react-hook-form";

import "./styles.css";

function Login({onClick}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //console.log(watch("alias")); // you can watch individual input by pass the name of the input
  return (
    <div className="form-group">
      <h1> Log in to your Warehouse </h1>
      <form onSubmit={handleSubmit(onClick)}>
        <label>Name</label>
        <input
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.name?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.name?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.name?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Alias</label>
        <input {...register("alias", { pattern: /^[A-Za-z]+$/i })} />
        {errors?.alias?.type === "pattern" && (
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

export default Login;
