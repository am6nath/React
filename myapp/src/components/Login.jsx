import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login</h1>
          <TextField id="outlined-basic" label="Name" variant="outlined" /><br /><br />
            
          <TextField id="outlined-basic" label="Password" variant="outlined" type='password' /><br /><br />
              
          <Button variant='contained'>Submit</Button>
      </div>
  )
}

export default Login