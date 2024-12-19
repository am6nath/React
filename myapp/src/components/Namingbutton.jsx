import { Button, Typography } from '@mui/material'
import React, { useState, } from 'react'
import { useEffect } from 'react'

const Namingbutton = () => {
    const [name, setname] = useState()
    const angular = () => {
        setname("Angular")
    }
    const react = () => {
        setname("React")
    }
    const viu = () => {
        setname("Viu")
    }
    // use effect
     
    useEffect(()=>{react()},[])
    return (
        <div>
            <Typography variant='h3'><b><u>Welcome {name}!</u></b></Typography>
            <br /><br /><br />
     
            <Button variant='contained' color='primary' onClick={angular}>Angular</Button>
            <br /><br /><br />
    
      
            <Button variant='contained' color='secondary' onClick={react}>React</Button>
            <br /><br /><br />
                    
            <Button variant='contained' color='success' onClick={viu}>Viu</Button>
            <br /><br /><br />
        
     </div>       
  )
}

export default Namingbutton