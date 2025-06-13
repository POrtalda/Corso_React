import { Link, Outlet } from 'react-router';
import './SaleProducts.css';

export default function SaleProducts() {
    const products = [
        { id: 1, nome: 'divano' },
        { id: 2, nome: 'poltrona' }
    ]
    return (
        <>
            <h2>Prodotti in offerta</h2>
            <ol>
                {products.map(p => (
                    <li key={p.id}>
                        <Link to={`${p.id}`}>
                            {p.nome}
                        </Link>
                    </li>
                ))}
            </ol>
            <Outlet />        </>
    );
}