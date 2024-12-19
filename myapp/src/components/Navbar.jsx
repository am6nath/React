import { AppBar, Button, Toolbar,IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar position="static">
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                    
                  </IconButton>
                  
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      MY OWN APP
                  </Typography>
                  <Link to="/l">
                      <Button color="inherit" >Login</Button>
                  </Link>
                  <Link to="/Signup">
                      <Button color="inherit" >Signup</Button>
                    
                  </Link>
                  <Link to="/state">
                  <Button color="inherit" >StateBasics</Button>
                  </Link>
                  <Link to="/ID">
                      <Button color="inherit" >IncreDecre</Button>
                  </Link>
                  <Link to="/n">
                      <Button color="inherit" > Namingbutton</Button>
                  </Link>
                  <Link to="/a">
                      <Button color="inherit" > API</Button>
                  </Link>
                  <Link to="/b">
                      <Button color="inherit" > Cards</Button>
                  </Link>

                 
              </Toolbar>
          </AppBar><br /><br /><br /></div>
  )
}

export default Navbar