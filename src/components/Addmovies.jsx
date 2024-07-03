import { Box, TextField } from '@mui/material'
import React from 'react'

const Addmovies = () => {
  return (
    <Box
      component="form"
      style={{marginTop:'10%'}}
    sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="MovieName"
          mname="MovieName"
        />
        </div>
        <div>
        <TextField
          disabled
          id="outlined-disabled"
          label="MovieImage"
          defaultValue="Hello World"
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="MovieDescription"
          mndes="Movie Description"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="MovieDirector"
          mdir="Movie Director"
        />
    </div>
    </Box>
  )

}

export default Addmovies