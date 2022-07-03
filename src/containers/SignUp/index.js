import React, { useState } from "react";
import { connect } from "react-redux";
import SignupActions from "../../actions/SignUp";
import ConfirmActions from "../../actions/ConfirmAccount";
import SignUp from "../../components/pages/SignUp";
import ConfirmationPanel from "../../components/confirmationPanel";


function SignUpContainer({ getUser, confirmUser }) {
  const [panel, displayPanel] = useState(false);
 

  const getUserInformation = (user) => {
    console.log("from container!!!", user);
    getUser(user);
    displayPanel(true);
  };

  const confirmAccount = async (data) => {
    let confAcc = {...data, "email":JSON.parse(localStorage.getItem('reduxState')).signup.user.email };    
    await confirmUser(confAcc);
  };


  return (
    <>
      {panel ? (
        <ConfirmationPanel onConfirm={confirmAccount} />
      ) : (
        <SignUp onClick={getUserInformation} />
      )}
    </>
  );
}

function mapStateToProps(state) {
  console.log("fromlogincontainer", state);
  const { user } = state.signup.user;
  return { user };
}

function mapDispatchToProps(dispatch) {
  function getUser(user) {
    console.log("from actions", user);
    dispatch(SignupActions.POST_USER(user));
  }  

  function confirmUser(user) {
    console.log("from actions", user);
    dispatch(ConfirmActions.CONFIRM_USER(user));
  }

  return { getUser, confirmUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
