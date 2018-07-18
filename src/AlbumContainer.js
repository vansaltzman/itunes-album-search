import React, { Component } from 'react'
import './App.css';

import AlbumItem from './AlbumItem.js'
import SearchBar from './SearchBar'

import { fallbackCover } from './utilities'
import { parseAlbumData, searchAlbums } from './utilities.js'



class AlbumContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      albums: [],
      loading: false,
    }
  }

  searchHandler(query) {
    this.setState({loading: true}, ()=> {
      searchAlbums(query)
      .then( results => {
        const albums = parseAlbumData(results.albums)
        this.setState({albums, loading: false})
      })
    })
  }

  render() { 
    return ( 
      <div id="App">
        <SearchBar />
        <div>
          <button
            onClick={()=> this.searchHandler('beck')}
          >
            Load Beck
          </button>
          <div className="album_container">
            {this.state.albums.length > 0 && this.state.albums.map( album => {
              return (
                <AlbumItem
                  key={album.id} 
                  album={album}
                  fallbackCover={fallbackCover}
                />
              )
            })}
          </div>  
        </div>
      </div>
    );
  }
}
 
export default AlbumContainer;