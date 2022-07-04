import React from "react";
import { useForm } from "react-hook-form";
import "../pages/SignUp/styles.css";

export default function ConfirmationPanel({onConfirm}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="form-group">
      <h3> Please write the confirmation code sent to your email</h3>
      <form onSubmit={handleSubmit(onConfirm)}>
        <label></label>
        <input
          placeholder="Code"
          {...register("code", {
            required: true,
            pattern: /^[0-9]*$/g
          })}
        />
        {errors?.code?.type === "required" && <p>This field is required</p>}
        {errors?.code?.type === "pattern" && (
          <p>Numbers only</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}
