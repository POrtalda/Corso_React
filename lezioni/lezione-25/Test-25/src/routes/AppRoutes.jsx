import { BrowserRouter, Route, Routes } from 'react-router'
import App from '../App'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Product from '../components/Product/Product'
import Menu from '../components/Menu/Menu'
import Main from '../components/Main/Main'
import Search from '../components/Search/Search'
export default function AppRoutes() {
  return (
    <>
      {/* qui gestiamo tutte le routes 
    dell'applicazione */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Main>
              <App />
            </Main>
          } />
          <Route path='/about' element={
            
              <Main>
                <About />
              </Main>
              

          
          } />
          <Route path='/contact' element={
            
              <Main>
                <Contact />
              </Main>
            
          } />

          <Route path='/product' element={
          
              <Main>
                <Product />
              </Main>
            
          } />

          <Route path='/search' element={
          
              <Main>
                <Search />
              </Main>
            
          } />

          <Route path='*' element={            
              <Main>
                <h1>Error not found 👀</h1>
              </Main>              
            
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}


