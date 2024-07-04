import { Box, TextField ,Button} from '@mui/material'
import React, { useState } from 'react'

const Addmovies = (movies) => {
  const [page,setPage]=useState("Internship")
  const [count,setCount]=useState(0);
  const [form,setForm]=useState({
    mname:movies.mname,
    mdes:movies.mdes,
    mdir:movies.mdir

  })
  function valueAdd(){
    // setCount(count+1)
    console.log(form)
  }
  function valueCap(e){
  // console.log("Changing:",e.target.name,"to",e.target.value);
  // console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
    console.log("Changing:",e.target.name,"to",e.target.value);
  }
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
          value={form.mname}
          onChange={valueCap}
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
          value={form.mdes}
          onChange={valueCap}
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="MovieDirector"
          mdir="Movie Director"
          value={form.mdir}
          onChange={valueCap}
        />
    </div>
    <div>
      <Button variant="contained" color="primary" onClick={valueCap}>
       Addmovies 
      </Button>
    </div>
    </Box>
  )

}

export default Addmovies