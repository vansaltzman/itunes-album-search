import React, { Component } from 'react';

import SearchBarIcon from './SearchBarIcon';

class SearchBar extends Component {
  componentDidMount() {
    this.searchBox.focus();
  }

  render() {
    const {
      status,
      searchInput,
      changeHandler,
      currentArtist,
      searchHandler,
    } = this.props;

    return (
      <div className="search_bar">
        <input
          value={searchInput}
          className="search_input"
          ref={(searchBox) => { this.searchBox = searchBox; }}
          name="searchInput"
          type="text"
          placeholder={currentArtist || 'Search by artist'}
          onChange={changeHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchHandler(searchInput);
            }
          }}
        />
        {searchInput && (
          <div
            role="Search"
            onClick={() => searchHandler(searchInput)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                searchHandler(searchInput);
              }
            }}
          >
            <SearchBarIcon status={status} />
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
