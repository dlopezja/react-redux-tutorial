import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import styles from './style.module.css';

function LoginComponent({ onTextChange, onSignIn }) {
  const userInLocalStorage= JSON.parse(window.localStorage.getItem('user'));
  return (
    <div classname={styles.container}>
      <div className={styles.flex}>
        Name: <Input onTextChange={onTextChange('name')} />
        Email: <Input onChange={onTextChange('email')} />
        Password: <Input onChange={onTextChange('password')} />
        User from Storage: {userInLocalStorage?.name}
      </div>

      <div>
        <Button onClick={onSignIn} label={'Sign In'} />
        <br />
        {/* if userInLocalStorage exist, then show the link to products: */}
        {userInLocalStorage?.email &&
        <Link to='/products'>Products List</Link>}
      </div>
    </div>
  )
}


export default LoginComponent;
