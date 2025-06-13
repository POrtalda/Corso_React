import { BrowserRouter, Routes, Route } from 'react-router'
import Main from '../components/Main/Main'
import App from '../App'
import About from '../components/About/About'
import Products from '../components/Products/Products'
import SaleProducts from '../components/SaleProducts/SaleProducts'
import NotAvailProducts from '../components/NotAvailProducts/NotAvailProducts'
import ProductDetail from '../components/ProductDetail/ProductDetail'

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <Main>
                            <App />
                        </Main>} />

                    <Route path='/about' element={
                        <Main>
                            <About />
                        </Main>} />

                    <Route path='/products' element={
                        <Main>
                            <Products />
                        </Main>}
                    >
                        <Route path='onsale' element={
                            <SaleProducts />
                        }>
                            <Route path=':id' element={
                                
                                    <ProductDetail/>
                                
                            }/>
                        </Route>
                        <Route path='notavaible' element={
                            <NotAvailProducts />
                        } />
                    </Route>

                    <Route path='*' element={
                        <Main>
                            <h1>Pagina non esistente</h1>
                        </Main>

                    } />

                </Routes>
            </BrowserRouter>

        </>
    )
}
