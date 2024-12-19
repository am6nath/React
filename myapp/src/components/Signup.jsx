import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
         
          <h1><u>Signup</u></h1>
        
         
          <TextField id="outlined-basic" label="Name" variant="outlined" /><br/><br/>
          
          <TextField id="outlined-basic" label="Email" variant="outlined" /><br/><br/>
          
          <TextField id="outlined-basic" label="Phone" variant="outlined" /><br/><br/>
          
          <TextField id="outlined-basic" label="Password" variant="outlined" type='password' /><br/><br/>
          
          <TextField id="outlined-basic" label="Re enter Password" variant="outlined" type='password' /><br/><br/>
              <Button variant='contained'>Submit</Button>
        
         
         
          
      </div>
  )
}

export default Signup