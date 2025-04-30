import React, { useEffect, useState } from 'react';

export default function Data() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setImages(json);
      });
  }, []);

  return (
    <>
      {images && images.length > 0 ? (
        images.map((image) => (
          <img key={image.id} src={image.thumbnailUrl} alt={image.title} />
        ))
      ) : (
        <p>Caricamento immagini...</p>
      )}
    </>
  );
}
