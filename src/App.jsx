import './App.css'
import RecipeDetails from "./pages/recipe-details"
import RecipePage from "./pages/recipe-list"
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/navbar'
import Footer from './pages/footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<RecipePage></RecipePage>}></Route>
        <Route path='/details/:id' element={<RecipeDetails></RecipeDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
