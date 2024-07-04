import { Button, Card, CardActions, CardContent, CircularProgress, Typography, Alert, Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewmovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios.get('https://dummyapi.online/api/movies')
      .then((res) => {
        setMovies(res.data) // Assuming the API returns an array of movie objects
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    )
  }

  if (error || !movies) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Alert severity="error">Failed to load movies. Please try again later.</Alert>
      </Box>
    )
  }

  return (
    <Box padding={2}>
      {movies.length === 0 ? (
        <Typography variant="body1" align="center">No movies found.</Typography>
      ) : (
        movies.map((movie, index) => (
          <Card sx={{ minWidth: 275, marginBottom: 2 }} key={index}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {movie.movie}
              </Typography>
              <img src={movie.image} alt={movie.movie} style={{ maxWidth: '100%', height: 'auto', marginBottom: '8px' }} />
              <Typography variant="body2" color="text.secondary">
                Rating: {movie.rating}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </Box>
  )
}

export default Viewmovies


