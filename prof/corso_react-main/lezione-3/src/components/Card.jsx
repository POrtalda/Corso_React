import './Card.css'

export default function Card({ children }) {

    return (
        <>
            <div className="card">
                {/* <p>questo è il comp Card</p> */}
                {children}
            </div>
        </>
    );
}