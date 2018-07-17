import React from 'react'
import { fallbackCover } from './utilities';

const albumItem = ({ fallbackCover, album: { title, link, coverLarge: cover } }) => {
  return ( 
    <a href={link} target="_blank" title={title}>
      <div className="item_container">
        <div
          className="album_cover"
          style={{backgroundImage: `url(${cover}), url(${fallbackCover})`}}
        >
        </div>
        <h4 className="album_title">
          {title}
        </h4>
      </div>
    </a>
   );
}
 
export default albumItem;