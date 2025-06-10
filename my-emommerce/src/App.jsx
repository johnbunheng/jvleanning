import Footer from './component/footer/footer'
import Home from './component/Hero/Home'
import Navbar from './component/Nav/Navbar'
import HTML from './component/Detail/html'
import CSS from './component/Detail/css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
 
  return (
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/html' element={<HTML/>}/>
            <Route path='/css' element={<CSS/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App;
