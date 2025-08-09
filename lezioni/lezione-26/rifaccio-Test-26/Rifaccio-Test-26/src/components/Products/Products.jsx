import { Link, Outlet } from 'react-router';
import './Products.css';

export default function Products() {

    return (
        <>
            <h2>questa è la pagina dei PRODUCTS</h2>
            <ul>
                <li>
                    <Link to='onsale'>In Offerta</Link>
                </li>
                
                <li>
                    <Link to='notavailable'>Non Disponibili</Link>
                </li>
            </ul>
            <Outlet/>
        </>
    );
}