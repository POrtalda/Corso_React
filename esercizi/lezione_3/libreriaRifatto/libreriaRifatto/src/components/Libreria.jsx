import './Libreria.css'

export default function Libreria ({title, children}) {

    return (
        <>
        <h1>{title}</h1>
        {children}
        </>
    )
}