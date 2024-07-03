import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbarmovies = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
    <AppBar position="absolute">
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
          Movie App
        </Typography>
        <Link to={'/'}><Button style={{color:'white'}}>Viemovies</Button></Link>
        <Link to={'/add'}><Button style={{color:'white'}}>Addmovies</Button></Link>
      </Toolbar>
    </AppBar>
    </Box>
    </div>
  )
}

export default Navbarmovies