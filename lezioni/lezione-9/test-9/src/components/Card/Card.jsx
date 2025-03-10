import { useState } from 'react'
import './Card.css'

export default function Card({ title, description }) {

  const [visible, setVisible] = useState(true)
  
  return (
    <>
      <div className='card' 
      onMouseEnter={()=> setVisible(true)}
      onMouseLeave={()=> setVisible(false)}>
        <h1>{title}</h1>
        {visible && (
          <h3>{description}</h3>
        )}

      </div>
    </>
  )
}
