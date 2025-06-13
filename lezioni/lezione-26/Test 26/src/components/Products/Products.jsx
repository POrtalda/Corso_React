import { Link, Outlet } from 'react-router';
import './Products.css';

export default function Products() {

    return(
        <>
            <h2>Prdotti</h2>

            <ul>
                <li>
                    <Link to='onsale'>IN OFFERTA</Link>
                </li>

                <li>
                    <Link to='notavaible'>NON DISPONIBILI</Link>
                </li>
            </ul>

            <Outlet/>
        </>
    );
}