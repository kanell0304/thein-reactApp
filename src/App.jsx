import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import MainPage from './page/MainPage'
import LoginPage from './page/auth/LoginPage'
import JoinPage from './page/auth/JoinPage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <nav>
        <Link to={"/mainPage"}> MainPage </Link>
        <Link to={"/loginPage"}> LoginPage </Link>
        <Link to={"/joinPage"}> JoinPage </Link>
      </nav>
      <Routes>
        <Route path='/mainPage' element={<MainPage />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/joinPage' element={<JoinPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
