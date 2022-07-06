import LoginComponent from "../../components/pages/Login";
import actions from '../../actions/Login';
import { connect } from "react-redux";
import { useState } from "react";
import styles from './style.module.css';

function LoginContainer({ user, signIn }) {
  const [values, setValues] = useState({ name: '',email: '', password: '' });


  const handleTextChange = (property) => (e) => {
    setValues({ ...values, [property]: e.target.value });
  }

  function handleLogin() {
    console.log("From container, name: ", values.name);
    console.log("From container, email: ", values.email);
    console.log("From container, password: ", values.password);
    signIn({ name: values.name, email: values.email, password: values.password })
    window.localStorage.setItem('user', JSON.stringify(values)); 
    //navigate to products page if values.email is not empty
    if(values.name!=='' && values.email !== '' && values.password !== null){
      window.location.href = '/products';
    }
      
  }
  
  return (
    <>
    <div>
      <LoginComponent
        onTextChange={handleTextChange}
        onSignIn={handleLogin} />
    </div>
     {/* show the user response from localstorage: */}
   
    <div className={styles.details}>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.password}</div>
    </div>
    </>

  )
}

function mapStateToProps(state) {
  const { user } = state.login;
  return { user };
}

function mapDispatchToProps(dispatch) {
  function signIn(payload) {
    dispatch(actions.SIGN_IN(payload));
  }

  return { signIn }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
