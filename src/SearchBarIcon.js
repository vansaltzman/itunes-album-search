import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

const statusIcons = {
  'LOADING': faSpinner,
  'IDLE': faSearch,
  'NO_RESULTS': faSearch,
  'ERROR': faExclamationTriangle
}

const SearchBarIcon = ({ status, searchHandler }) => {
  return ( 
    <FontAwesomeIcon 
      icon={statusIcons[status]}
      spin={status === 'LOADING'}
      size={'4x'}
      className="search_icon" 
    />
   );
}
 
export default SearchBarIcon;