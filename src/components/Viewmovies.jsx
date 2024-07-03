import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const Viewmovies = () => {
    const rows=[{mname:"RDR",mdesc:"Movie1",mdir:"Ram"},{mname:"KGF",mdesc:"Movie2",mdir:"Yash"},{mname:"MB",mdesc:"Movie3",mdir:"Ravis"}]
  return (
    <>
    {rows.map((row)=>(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {row.mname}
        </Typography>
        <Typography variant="h5" component="div">
          {row.mdesc}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {row.mdir}
        </Typography>
        <Typography variant="body2">
          
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    ))}
    </>
  )
}

export default Viewmovies

