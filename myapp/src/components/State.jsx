import { TextField } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[name,setname]=useState("ram")
  return (
    <div>
      <br/><br/>
          <h1>welcome to state basics</h1>
          <h2>welcome {name}</h2>
          <TextField variant='outlined'label="enter name"/>
    </div>
  )
}

export default State