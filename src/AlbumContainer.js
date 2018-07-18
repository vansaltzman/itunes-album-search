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
      currentArtist: null,
    }
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(artist) {
    this.setState({loading: true}, ()=> {
      searchAlbums(artist)
      .then( results => {
        const albums = parseAlbumData(results.albums)
        this.setState({albums, currentArtist: artist, loading: false})
      })
    })
  }

  render() { 
    return ( 
      <div id="App">

        <SearchBar 
          searchHandler={this.searchHandler}
          currentArtist={this.state.currentArtist}
          loading={this.state.loading}
        />

        <div>
          <div className="album_container">
            {this.state.albums.length > 0 && this.state.albums.map( album => {
              return (
                <AlbumItem
                  key={album.id} 
                  album={album}
                  fallbackCover={fallbackCover}
                  searchHandler={this.searchHandler}
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