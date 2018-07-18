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
      searchInput: '',
      albums: [],
      status: 'IDLE', // IDLE, ERROR, LOADING, NO_RESULTS
      currentArtist: null,
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  searchHandler(artist) {
    this.setState({status: 'LOADING'}, ()=> {
      searchAlbums(artist)
      .then( results => {
        const albums = parseAlbumData(results.albums)

        if (albums.length < 1) {
          this.setState({status: 'NO_RESULTS'})
        } else {
          this.setState({status: 'IDLE'})
        }

        this.setState({albums, currentArtist: artist, searchInput: artist})
      })
      .catch( err => {
        console.log(err)
        this.setState({status: 'ERROR'})
      })
    })
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() { 
    return ( 
      <div id="App">

        <SearchBar 
          searchInput={this.state.searchInput}
          changeHandler={this.changeHandler}
          searchHandler={this.searchHandler}
          currentArtist={this.state.currentArtist}
          status={this.state.status}
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