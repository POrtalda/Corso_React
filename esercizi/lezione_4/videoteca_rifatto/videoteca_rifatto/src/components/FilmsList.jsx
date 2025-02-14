import './FilmList.css'


export default function FilmsList({ children }) {
    return (
        <>
            <div className="films">
                {children}
            </div>
        </>
    )
}
