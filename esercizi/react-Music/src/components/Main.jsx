import './Main.css'

export default function Main({ isDarkModeActive, 
  setIsDarkModeActive,search,setSearch,playlists }) {
 
  const filteredPlaylists = playlists.filter(p => p.title.toLowerCase().startsWith(search))
  return (
    <>
      <div className='main'>
        <div className={isDarkModeActive ? 'main-light' : 'main-dark'}>
          <h4 id='leTuePlaylist'>le tue playlist:</h4>
          <div className='card-container'>
            {
              
              filteredPlaylists.map(playlist => (

                <div key={playlist.id} className='card-hover'>
                  <div><p className='card'>{playlist.title}</p>
                    <div className='image-container'>
                      <img src={playlist.image} alt={playlist.title} />
                    </div>
                  </div>
                </div>

              ))
            }


          </div>
        </div>
      </div>

    </>
  )
}
