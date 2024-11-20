import React from 'react';
import './indexx.css';

const Gallery: React.FC = () => {
  const artworks = [
    { title: 'The Potato Eaters, 1885', artist: 'Vincent van Gogh', image: '/lukis4.png' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', image: '/lukis2.png' },
    { title: 'Starry Night, 1889', artist: 'Vincent van Gogh', image: '/lukis3.png' },
    { title: 'Martina Bulkova', artist: '404', image: '/lukis5.png' },
    { title: '404', artist: '404', image: '/lukis6.png' },
    { title: 'Dan Cristian Pădureț', artist: '404', image: '/lukis7.png' },
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h3>Discover Art You Love From the World’s Leading Online Gallery</h3>
        <div className="artworks">
          {artworks.map((artwork, index) => (
            <div key={index} className="artwork">
              <img src={artwork.image} alt={artwork.title} />
              <h4>{artwork.title}</h4>
              <p>{artwork.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
