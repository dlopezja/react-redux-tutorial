import LoginComponent from "../../components/pages/Login";
import actions from '../../actions/Login';
import { connect } from "react-redux";
import { useState } from "react";

function LoginContainer({ user, signIn }) {
  const [values, setValues] = useState({ name: '',email: '', password: '' });


  const handleTextChange = (property) => (e) => {
    setValues({ ...values, [property]: e.target.value });
  }

  function handleLogin() {
    signIn({ name: values.name, email: values.email, password: values.password })
    window.localStorage.setItem('user', JSON.stringify(values));
    console.log("VALUES TRAE: , ", values);
    //navigate to products page:
    if(values.email!==""){
      window.location.href = '/products';
    }
    //window.location.href = '/products';
    
  }
  
  return (
    <>
    <div>
      <LoginComponent
        onTextChange={handleTextChange}
        onSignIn={handleLogin} />
    </div>
     {/* show the user response: */}
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.password}</h1>
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
