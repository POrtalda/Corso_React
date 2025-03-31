import './Card.css';
import { FaEdit } from "react-icons/fa";

export default function Card({ products, onClickRemove, setSelectedProductId, selectedProductId }) {
  const onClickEdit = (id) => {
    console.log(`Edit clicked for product ID: ${id}`);
  };
  
  
  return (
    <ul className="card-list">
      {products.map((product) => {
        const isSelected = selectedProductId.includes(product.id);

        return (
          <li key={product.id} className={`card ${isSelected ? 'acquistato' : ''}`}>
            <div className="card-left">
              <span className="product-icon">🛒</span>
              <span className="product-name">{product.nameProduct}</span>
            </div>
            <div className="card-buttons">
              <button 
                className="btn-check" 
                onClick={() => {
                  if (selectedProductId.includes(product.id)) {
                    setSelectedProductId(selectedProductId.filter((id) => id !== product.id));
                  } else {
                    setSelectedProductId([...selectedProductId, product.id]);
                  }
                }}
              >
                ✔
              </button>
              <button className="btn-remove" onClick={() => onClickRemove(product.id)}>✖</button>
              <button className="btn-edit" onClick={() => onClickEdit(product.id)}><FaEdit /></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
