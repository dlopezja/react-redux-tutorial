import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Icon from "@material-ui/core/Icon";
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@mui/material/CircularProgress';


/*var jalaemail = 'test@jala-fundation.org'
if (/@jala-fundation.org\s*$/.test(jalaemail)) {
   console.log("it ends in @jala-fundation.org");
} */

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})
function validateEmail (email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

export default function Create({ onTextChange, onSignIn }) {
  const classes = useStyles()

  const [values, setValues] = useState(
    { 
    name: '',
    email: '', 
    password: '' 
    }
  );

  const [nameError, setNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  
  function handleChange(e) {
    setValues({
        ...values,
        [e.target.name]: e.target.value 
    })

    onTextChange(e.target.name);    
  }

  function handleClick(){
    if(values.name === ''){
        document.getElementById('nameError').appendChild=
         <Alert severity="error">Name is required</Alert>
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameError(false)
    setPasswordError(false)
    setEmailError(false)

    if (values.name === '') {
      setNameError(true);
       
    }
    if (values.password === '') {
      setPasswordError(true)
    }
    if (values.email === '') {
      setEmailError(true)
    }
   
    
  }

  return (
    <>
    <CircularProgress />
    <Container size="sm">
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Please enter your Credentials
      </Typography>
      
      <form  autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={handleChange}
          onInput={onTextChange('name')}
          label="name" 
          name="name"
          variant="outlined" 
          color="secondary" 
          fullWidth={true}
          type="text"
          error={nameError}
        />
        {nameError && <Alert severity="error">Name is required</Alert>}
        <TextField className={classes.field}
          onChange={handleChange}
          onInput={onTextChange('email')}
          label="email" 
          name="email"
          variant="outlined" 
          color="secondary" 
          fullWidth={true}
          type="email"
          error={emailError}
        />
        {emailError && <Alert severity="error">Email is required</Alert>}
        <TextField className={classes.field}
          onChange={handleChange}
          onInput={onTextChange('password')}
          name="password"
          label="password"
          variant="outlined"
          color="secondary"
          fullWidth={true}
          type="password"
          error={passwordError}
        />
        {passwordError && <Alert severity="error">Password is required</Alert>}
        <Button
          onMouseOver={handleClick}
          type="submit" 
          color="primary" 
          variant="contained"  
          disabled={nameError || passwordError || emailError|| values.name === '' || values.password === '' || values.email === ''|| !validateEmail(values.email)}
          onClick={onSignIn}
          endIcon={<Icon />}>
          Submit          
        </Button>

      </form>


      
    </Container>
    </>
  )
}
