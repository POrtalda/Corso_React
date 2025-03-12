import { useState } from 'react';

export default function PlaylistCard({ playlist }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className='card-hover'
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <p className='card'>{playlist.title}</p>
      <div className='image-container'>
        <img src={playlist.image} alt={playlist.title} />
      </div>
      
      {showDescription && (
        <p className='description'>{playlist.description}</p>
      )}
    </div>
  );
}
