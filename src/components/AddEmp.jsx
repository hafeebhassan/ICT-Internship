import React from 'react'
import {Button, Container, TextField}from '@mui/material'
const AddEmp = () => {
  return (
    <div>
        <br /><br /><br />
        <Container maxWidth="sm"style={{backgroundColor:"whitesmoke"}}>
            <br /><br />
        <TextField variant='outlined'label="Enter name"/>
        <br /><br />
        <TextField variant='outlined'label="Enter age"type='Number'/>
        <br /><br />
        <TextField variant='outlined'label="Enter Department"/>
        <br /><br />
        <TextField variant='outlined'label="Enter Salary"/>
        <br /><br />
        <Button variant='contained'style={{backgroundColor:"black"}}>Add Employee</Button>
        <br /><br /><br />
        </Container>
    </div>
  )
}

export default AddEmp