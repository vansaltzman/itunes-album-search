import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      placeholder: 'Search',
      searchInput: '',
      showButton: false,
     }
     this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() { 

    const {
      loading,
      searchHandler,
      setPlaceholderHandler
    } = this.props

    return ( 
      <div className="search_bar">
        <input 
          className="search_input" 
          name="searchInput"
          type="text" 
          placeholder={this.state.placeholder}
          onChange={this.changeHandler}
          onKeyDown={(e)=> e.key === 'Enter' && console.log('enter')}
        />
        {this.state.searchInput && 
        <FontAwesomeIcon 
          icon={faSearch}
          className="search_icon" 
          onClick={()=> console.log('click')}
        />}
      </div>
     );
  }
}
 
export default SearchBar;