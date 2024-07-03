import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewmovies from './components/Viewmovies'
import Addmovies from './components/Addmovies'
import Navbarmovies from './components/Navbarmovies'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbarmovies/>
    <Routes>
     <Route path='/'element={<Viewmovies/>}></Route>
     <Route path='/add'element={<Addmovies/>}></Route>
     </Routes>
    </>
  )
}
export default App
  