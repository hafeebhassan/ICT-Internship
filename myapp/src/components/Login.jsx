import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <br />
      <br />
      <h1>Login</h1>
      <TextField id="outlined-basic" label="Username" variant="outlined" />

      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
      />
      <br />
      <br />

      <Button variant="contained" style={{ backgroundColor: "olivedrab" }}>
        login
      </Button>
    </div>
  );
}

export default Login