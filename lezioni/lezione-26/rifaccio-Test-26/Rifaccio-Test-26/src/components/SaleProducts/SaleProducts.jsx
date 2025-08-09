import { Link } from 'react-router';
import './SaleProducts.css';

export default function SaleProducts() {
    const products = [
        { id: 1, name: "Divano" },
        { id: 2, name: "Lampada" },
        { id: 3, name: "Tavolo a fiori" },
    ]
    return (
        <>
            <hr />
            <h2>Prodotti in offerta</h2>
            <ol>
                {products.map((product) => (
                    <li key={product.id} >
                        <Link to={`${product.id}`}>
                        {product.name}
                        </Link>
                        
                    </li>
                ))}
            </ol>
        </>
    );
}