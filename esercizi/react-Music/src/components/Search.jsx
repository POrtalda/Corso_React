import './Search.css'

export default function Search({isDarkModeActive, setIsDarkModeActive}) {
  return (
    <>
      <div className={isDarkModeActive ? 'search-light' : 'search-dark'}>
        <h3>Filtra le playlist:</h3>
        <input  type="text" />
      </div>
    </>
  )
} 
