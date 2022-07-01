import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import styles from './style.module.css';

function LoginComponent({ onTextChange, onSignIn }) {
  return (
    <div>
      <div className={styles.flex}>
        Email: <Input onChange={onTextChange('email')} />
        Password: <Input onChange={onTextChange('password')} />
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
