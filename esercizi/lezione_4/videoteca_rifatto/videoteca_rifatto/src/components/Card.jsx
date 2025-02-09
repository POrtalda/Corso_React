

function Card({ title,children}) {
  return (
    <div>
        <h1><b>{title}</b></h1>
      {children}
    </div>
  )
}

export default Card
