import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/Styles/Main.css'


import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import RecipeHistory from './components/RecipeHistory/RecipeHistory.jsx'
import CreateRecipe from './components/CreateRecipe/CreateRecipe.jsx'
import Footer from './components/Footer/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <CreateRecipe />
    <RecipeHistory />
    <Footer />
  </StrictMode>,
)
