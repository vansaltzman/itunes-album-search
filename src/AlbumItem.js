import React from 'react';

const albumItem = (
  {
    album: {
      title,
      artist,
      link,
      coverLarge: cover,
    },
    fallbackCover,
    searchHandler,
  },
) => (
  <div className="item_container">

    <a className="album" href={link} target="_blank" rel="noopener noreferrer" title={`${title} by ${artist}`}>
      <div style={{ display: 'block' }}>
        <div
          className="album_cover"
          style={{ backgroundImage: `url(${cover}), url(${fallbackCover})` }}
        />

        <h3 className="album_title">
          {title}
        </h3>
      </div>
    </a>

    <a className="album" title={`Search for albums by ${artist}`} href={`/${artist}`} onClick={() => searchHandler(artist)}>
      <h4 className="artist_name">
        {artist}
      </h4>
    </a>

  </div>
);

export default albumItem;
