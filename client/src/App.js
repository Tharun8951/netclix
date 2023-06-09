import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.scss'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import CardDeatails from './Components/Carddetails/CardDeatails'
import FavoritePage from './Components/FavoritePage/FavoritePage'
import LoginPage from './Components/Authentication/LoginPage'
import SignupPage from './Components/Authentication/SignupPage'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/CardDeatails' element={<CardDeatails/>}/>
        <Route path='/favoritepage' element={<FavoritePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </Router>
     
  </>
  )
}

export default App
