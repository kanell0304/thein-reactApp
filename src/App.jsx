import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import MainPage from './page/MainPage'
import LoginPage from './page/auth/LoginPage'
import JoinPage from './page/auth/JoinPage'
import MyPage from './page/MyPage'
import PostAddPage from './page/post/PostAddPage'
import PostDetailPage from './page/post/PostDetailPage'
import PostEditPage from './page/post/PostEditPage'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {

  return (
    <BrowserRouter basename={basename}>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path='/mainPage' element={<MainPage />} />
            <Route path='/loginPage' element={<LoginPage />} />
            <Route path='/joinPage' element={<JoinPage />} />
            <Route path='/myPage' element={<MyPage />} />
            <Route path='/postAddPage' element={<PostAddPage />} />
            <Route path='/postDetailPage/:id' element={<PostDetailPage />} />
            <Route path='/postEditPage/:id' element={<PostEditPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
