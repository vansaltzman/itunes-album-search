import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const statusIcons = {
  LOADING: faSpinner,
  SUCCESS: faSearch,
  NO_RESULTS: faSearch,
  WELCOME: faSearch,
  ERROR: faExclamationTriangle,
};

const SearchBarIcon = ({ status }) => (
  <FontAwesomeIcon
    icon={statusIcons[status]}
    spin={status === 'LOADING'}
    size="4x"
    className={status === 'ERROR' ? 'error_icon' : 'search_icon'}
  />
);

export default SearchBarIcon;
