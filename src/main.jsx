import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RecipeContext>
      <App />
    </RecipeContext>
  </BrowserRouter>
)
