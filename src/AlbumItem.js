import React from 'react'
import { fallbackCover } from './utilities';

const albumItem = ({ fallbackCover, album: { title, coverLarge: cover } }) => {
  return ( 
    <div className="item_container">
      <div
        className="album_cover"
        style={{backgroundImage: `url(${cover}), url(${fallbackCover})`}}
      >
      </div>
      <h4>
        {title}
      </h4>
    </div>
   );
}
 
export default albumItem;