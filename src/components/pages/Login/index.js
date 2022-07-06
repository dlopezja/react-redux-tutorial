import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Icon from "@material-ui/core/Icon";
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

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
    <Alert key={Math.random(100000)} severity="error">
        {"ERROR"}
      </Alert>
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
        //   required
          error={nameError}
        />
        <TextField className={classes.field}
          onChange={handleChange}
          onInput={onTextChange('email')}
          label="email" 
          name="email"
          variant="outlined" 
          color="secondary" 
          fullWidth={true}
          type="email"
          required
          error={emailError}
        />

        <TextField className={classes.field}
          onChange={handleChange}
          onInput={onTextChange('password')}
          name="password"
          label="password"
          variant="outlined"
          color="secondary"
          fullWidth={true}
          type="password"
          required
          error={passwordError}
        />

        <Button
          type="submit" 
          color="primary" 
          variant="contained"
          
          onClick={onSignIn}
          endIcon={<Icon />}>
          Submit          
        </Button>
      </form>

      
    </Container>
    </>
  )
}
