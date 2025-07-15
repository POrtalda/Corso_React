import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import SaleProducts from "../components/SaleProducts/SaleProducts";
import NotAvailProducts from "../components/NotAvailProducts/NotAvailProducts";
import ProductDetail from "../components/ProductDetail/ProductDetail";

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={
                        <MainTemplate>
                            <App />
                        </MainTemplate>
                    } />

                    <Route path="/about" element={
                        <MainTemplate>
                            <About />
                        </MainTemplate>
                    } />

                    <Route path="/products" element={
                        <MainTemplate>
                            <Products />
                        </MainTemplate>
                    }>
                        <Route path="onsale" element={
                            <SaleProducts />
                        }>
                            <Route path=":id" element={<ProductDetail/>} />
                        </Route>

                        <Route path="notavailable" element={
                            <NotAvailProducts />
                        } />
                    </Route>

                    <Route path="*" element={
                        <MainTemplate>
                            <h1>Pagina non trovata</h1>
                        </MainTemplate>
                    } />
                </Routes>

            </BrowserRouter>
        </>
    )
}