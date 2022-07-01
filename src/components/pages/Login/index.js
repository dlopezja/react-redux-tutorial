import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    props.onClick(data);
  };
  return (
    <div className="form-group">
      <h1> Log in </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input
          {...register("Username", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.Username?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.Username?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.Username?.type === "pattern" && (
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