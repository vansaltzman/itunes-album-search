import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchInput: '',
      showButton: false, // Modify logic to use this state item or remove this state item
     }
     this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() { 

    const {
      loading,
      currentArtist,
      searchHandler,
    } = this.props

    return ( 
      <div className="search_bar">
        <input 
          className="search_input" 
          name="searchInput"
          type="text" 
          placeholder={currentArtist || 'Search by artist'}
          onChange={this.changeHandler}
          onKeyDown={(e)=> e.key === 'Enter' && searchHandler(this.state.searchInput)}
        />
        {loading && <FontAwesomeIcon 
          icon={faSpinner}
          spin
          size={'4x'}
          className="search_icon" 
        />}
        {!loading && this.state.searchInput && // Fix the conditional rendering to not render when focus is outside of container.
        <FontAwesomeIcon 
          icon={faSearch}
          size={'4x'}
          className="search_icon" 
          onClick={()=> searchHandler(this.state.searchInput)}
        />}
      </div>
     );
  }
}
 
export default SearchBar;