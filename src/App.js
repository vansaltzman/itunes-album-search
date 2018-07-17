import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { parseAlbumData, searchAlbums } from './utilities.js'

import AlbumContainer from './AlbumContainer'
import SearchBar from './SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        </div>
        <button
          onClick={()=> {
            return searchAlbums('beck')
            .then( response => {
              console.log(parseAlbumData(response.albums))
            })
          }}
        > 
          Test
        </button> */}
        <SearchBar />
        <AlbumContainer />
      </div>
    );
  }
}

export default App;
