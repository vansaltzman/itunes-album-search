import React, { Component } from 'react';
import './App.css';

import AlbumItem from './AlbumItem';
import SearchBar from './SearchBar';

import { parseAlbumData, searchAlbums, fallbackCover } from './utilities';

class AlbumContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      albums: [],
      status: 'WELCOME', // WELCOME, SUCCESS, ERROR, LOADING, NO_RESULTS
      currentArtist: null,
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  searchHandler(artist) {
    this.setState({ status: 'LOADING' }, () => {
      searchAlbums(artist)
        .then(({ albums, status }) => {
          this.setState({ status });
          this.setState({ albums, currentArtist: artist, searchInput: artist });
        })
        .catch((err) => {
          console.err(err);
          this.setState({ status: 'ERROR' });
        });
    });
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value, status: 'SUCCESS' });
  }

  render() {
    const {
      albums,
      status,
      searchInput,
      currentArtist,
    } = this.state;

    return (
      <div id="App">

        <SearchBar
          searchInput={searchInput}
          changeHandler={this.changeHandler}
          searchHandler={this.searchHandler}
          currentArtist={currentArtist}
          status={status}
        />

        <div className="albums_container">
          {status === 'SUCCESS' && albums.map(album => (
            <AlbumItem
              key={album.id}
              album={album}
              fallbackCover={fallbackCover}
              searchHandler={this.searchHandler}
            />
          ))}

          {status === 'WELCOME' && (
            <div className="welcome_text">
              <h1>
                Hello!
              </h1>
              <p>
                Search for albums by your favorite artist on iTunes by
                 entering the artists name in the search box above and
                 clicking the search icon (or press Enter)
              </p>
            </div>)
          }

          {status === 'NO_RESULTS' && (
          <h1 className="no_results_text">
            Sorry, no results
            {' '}
            <span role="img" aria-label="sadface">
              {' 😞'}
            </span>
          </h1>
          )}

          {status === 'ERROR' && (
            <h1 className="no_results_text">
              Something went wrong. Please try your search again.
            </h1>
          )}
        </div>

      </div>
    );
  }
}

export default AlbumContainer;
