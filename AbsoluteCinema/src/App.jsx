import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import TestPage from './pages/TestPage/TestPage'
import { BrowserRouter, Routes, Route } from 'react-router'
import MoviePage from './pages/MoviePage/MoviePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<HomePage/>}/> 
      <Route path ='/movie/:id' element={<MoviePage/>}/>

    </Routes>      
    </BrowserRouter>    
  )
}

export default App
