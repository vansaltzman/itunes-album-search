import React from 'react'
import { fallbackCover } from './utilities';

const albumItem = ({ fallbackCover, album: { title, artist, link, coverLarge: cover } }) => {
  return ( 
    <a className="album_anchor" href={link} target="_blank" title={title}>
      <div className="item_container">
        <div
          className="album_cover"
          style={{backgroundImage: `url(${cover}), url(${fallbackCover})`}}
        >
        </div>
        <h3 className="album_title">
          {title}
        </h3>
        <h4 className="artist_name">
          {artist}
        </h4>
      </div>
    </a>
   );
}
 
export default albumItem;