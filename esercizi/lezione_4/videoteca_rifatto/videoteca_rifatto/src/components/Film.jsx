import './Film.css'


export default function Film({isAvaible,children}) {
  return (
   <>
        <div className={isAvaible ? 'card-film film-active' : 'card-film film-inactive'}>
        
        {children}
        </div>
   </>
  )
}
