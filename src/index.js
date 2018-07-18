import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AlbumContainer from './AlbumContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AlbumContainer />, document.getElementById('root'));
registerServiceWorker();
