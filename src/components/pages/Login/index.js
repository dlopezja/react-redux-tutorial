
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import styles from './style.module.css';

function LoginComponent({ onTextChange, onSignIn }) {
  
  return (
   
    <div className={styles.container}>
      <div className={styles.flex}>
        <Input  placeholder={"Name..."} onChange={onTextChange('name')} required />
         <Input type={"email"} placeholder={"Email..."} onChange={onTextChange('email')} required/>
         <Input type={"password"} placeholder={"Password..."} onChange={onTextChange('password')} required />
        
      </div>

      <div>
        <Button className={styles.myButton} onClick={onSignIn} label={'Sign In'}/>
        <br />       
      </div>
    </div>
 
  )
}


export default LoginComponent;
