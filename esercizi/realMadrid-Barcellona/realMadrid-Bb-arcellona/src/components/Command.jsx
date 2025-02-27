import './Command.css'

export default function Command() {
  return (
    <>
      <div className="container">
        <div className="arrow_back">
          <button className='pulsante'>
            <span class="material-symbols-outlined">
              arrow_back
            </span>
          </button>
        </div>
        <div className='right-buttons'>
          <div className="ios_share">
            <button className='pulsante'>
              <span class="material-symbols-outlined">
                ios_share
              </span>
            </button>
          </div>

          <div className="more_vert">
            <button className='pulsante'>
              <span class="material-symbols-outlined">
                more_vert
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

