import './Card.css'

export default function Card ({isAvailable, children}) {

    return (
        <>
        <div  style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isAvailable ? '#c3c7c7' : '#ca4b4b',
          margin: '20px',
        }}>
            {children}
        </div>
        
        </>
    )
}