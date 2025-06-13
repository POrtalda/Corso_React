import { Outlet } from 'react-router';
import './NotAvailProducts.css';

export default function NotAvailProducts() {

    return(
        <>
            <h2>prodotti NON disponibili</h2>
            <Outlet/>
        </>
    );
}