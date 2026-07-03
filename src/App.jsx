import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import MainPage from './page/MainPage'
import LoginPage from './page/auth/LoginPage'
import JoinPage from './page/auth/JoinPage'
import MyPage from './page/MyPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/mainPage' element={<MainPage />} />
          <Route path='/loginPage' element={<LoginPage />} />
          <Route path='/joinPage' element={<JoinPage />} />
          <Route path='/myPage' element={<MyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
