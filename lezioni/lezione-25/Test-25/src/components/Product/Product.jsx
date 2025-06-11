import { useNavigate } from 'react-router';
import './Product.css';

export default function Product() {

const navigate = useNavigate();

    return (
        <>
            <h1>Product</h1>
            <p>this is Product</p>
            <button onClick={()=> navigate('/')}>
                torna home
            </button>
        </>
    );
}