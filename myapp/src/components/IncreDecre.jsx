import { Button } from '@mui/material'
import React, { useState } from 'react'

const IncreDecre = () => {
    const [sno, setsno] = useState(0);
    const plus = () => {
        setsno(sno + 1);
    
    }
    const minus = () => {
        setsno(sno - 1);
    }
        return (
            <div>
         
                <br /><br /><br />
                <p>Current no : {sno}</p>
                <Button variant='contained' onClick={plus} >plus</Button><br /><br /><br />
                <Button variant='contained' onClick={minus} >minus</Button>

          
            </div>
        )
    }


export default IncreDecre