import React from 'react'

const albumItem = ({ fallbackCover, album: { title, artist, link, coverLarge: cover }, searchHandler }) => {
  return ( 
      <div className="item_container">

        <a className="album" href={link} target="_blank" title={`${title} by ${artist}`}>
          <div style={{display: 'block'}}>
            <div
              className="album_cover"
              style={{backgroundImage: `url(${cover}), url(${fallbackCover})`}}
            >
            </div>

            <h3 className="album_title">
              {title}
            </h3>
          </div>
        </a>

        <a className="album" title={`Search for albums by ${artist}`}>
          <h4 className="artist_name"
            onClick={()=> searchHandler(artist)}
          >
            {artist}
          </h4>
        </a>

      </div>
   );
}
 
export default albumItem;