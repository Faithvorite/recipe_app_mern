import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import CreateRecipe from './pages/CreateRecipe'
import Home from './pages/Home'
import SavedRecipes from './pages/SavedRecipes'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipe" element={<SavedRecipes />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
