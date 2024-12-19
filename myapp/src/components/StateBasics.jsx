import { TextField, Typography,Button } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
   
    var [fname, setfname] = useState("")
    var [sname, setsname] = useState("")
    var [sno, setsno] = useState("")
    const handleinput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
    }
    const hand = () => {
        setsname(fname)
    }
   
  return (
      <div>
          <Typography variant='h5'>Welcome {sname}</Typography>
          <br /><br /><br />
          <TextField variant='outlined' label='Enter your name' onChange={handleinput} />
          <br /><br /><br />
          <Button variant='contained' onClick={hand} >Submit</Button>
          


    </div>
  )
}

export default StateBasics