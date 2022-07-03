import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import "./styles.css";
function Login({onTextChange, onSignIn}) {
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
      <h1> Log in </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <Input
          {...register("Username", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          onChange={onTextChange('Username')}/>
        <label>Password</label>
        <Input 
        type="password"
        {...register("password", {  })} 
        onChange={onTextChange('password')}/>
 

        <Button onClick={onSignIn} label={'Sign In'} />
      </form>
    </div>
  );
}

export default Login;