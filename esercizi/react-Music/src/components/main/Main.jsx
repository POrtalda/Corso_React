import './Main.css'
import PlaylistCard from '../playlistCard/PlaylistCard'

export default function Main({ isDarkModeActive,
  setIsDarkModeActive, search, setSearch, playlists }) {

  const filteredPlaylists = playlists.filter(p => p.title.toLowerCase().startsWith(search))
  
  return (
    <>
      <div className='main'>
        <div className={isDarkModeActive ? 'main-light' : 'main-dark'}>
          <h4 id='leTuePlaylist'>le tue playlist:</h4>
          <div className='card-container'>
            {
              filteredPlaylists.length == 0 ? (
                 <p>playlist non trovata</p>
              ) : (
                filteredPlaylists.map(playlist => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
              )
              
              ))
            }



          </div>
        </div>
      </div>

    </>
  )
}
