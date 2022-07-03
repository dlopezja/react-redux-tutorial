import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="form-group">
      <h1> Sign Up </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input
          {...register("Username", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <label>Password</label>
        <input 
        type="password"
        {...register("password", {  })} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Signup;