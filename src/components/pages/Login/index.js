
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import "./styles.css";

function LoginComponent({ onTextChange, onSignIn }) {
  console.log('login asda:>> ', onTextChange);
  return (
    <div className="form-group">
      <h1> Log in </h1>
      <div>
      <label>Email:</label> <Input onChange={onTextChange('email')} />
      <label>Password:</label> <Input onChange={onTextChange('password')} />
      </div>

      <div>
        <Button onClick={onSignIn} label={'Sign In'} />
        <br />
        <Link to='/'>Products List</Link>
      </div>
    </div>
  )
}


export default LoginComponent;