import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <br />
      <br />
      <h1>Signup Page</h1>
      <TextField id="outlined-basic" label="Full Name" variant="outlined" />

      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="email id"
        variant="outlined"
        type="email"
      />
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
      <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
      <br />
      <br />

      <Button variant="contained" style={{ backgroundColor: "olivedrab" }}>
        SignUp
      </Button>
    </div>
  );
}

export default Signup