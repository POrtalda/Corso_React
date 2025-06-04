import './Vehicle.css';

export default function Vehicle({children}) {
  return (
    <>
      <div className='card'>
        {children}
      </div>
    </>
  )
}
