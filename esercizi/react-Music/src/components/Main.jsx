import './Main.css'

export default function Main({ isDarkModeActive, setIsDarkModeActive }) {
  return (
    <>
      <div className='main'>
        <div className={isDarkModeActive ? 'main-light' : 'main-dark'}>
          <h4 id='leTuePlaylist'>le tue playlist:</h4>
          <div className='card-container'>
            <p className='card'>card</p>
            <p className='card'>card</p>
            <p className='card'>card</p>
            <p className='card'>card</p>
            <p className='card'>card</p>
            <p className='card'>card</p>
          </div>
        </div>
      </div>

    </>
  )
}
