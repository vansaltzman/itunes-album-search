import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { parseAlbumData } from './utilities'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('parse album data returns same number of results', () => {
  const exampleData = [ {
    "wrapperType": "collection",
    "collectionType": "Album",
    "artistId": 312095,
    "collectionId": 1273064244,
    "amgArtistId": 43291,
    "artistName": "Beck",
    "collectionName": "Colors",
    "collectionCensoredName": "Colors",
    "artistViewUrl": "https://itunes.apple.com/us/artist/beck/312095?uo=4",
    "collectionViewUrl": "https://itunes.apple.com/us/album/colors/1273064244?uo=4",
    "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/6a/e5/13/6ae5134e-9100-794b-3402-a78efa3b8835/source/60x60bb.jpg",
    "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/6a/e5/13/6ae5134e-9100-794b-3402-a78efa3b8835/source/100x100bb.jpg",
    "collectionPrice": 9.99,
    "collectionExplicitness": "explicit",
    "contentAdvisoryRating": "Explicit",
    "trackCount": 11,
    "copyright": "Fonograf Records/Capitol Records;℗2017 Fonograf Records under exclusive license to UMG Recordings, Inc.",
    "country": "USA",
    "currency": "USD",
    "releaseDate": "2017-10-13T07:00:00Z",
    "primaryGenreName": "Alternative"
  },
  {
    "wrapperType": "collection",
    "collectionType": "Album",
    "artistId": 312095,
    "collectionId": 19820496,
    "amgArtistId": 43291,
    "artistName": "Beck",
    "collectionName": "Odelay",
    "collectionCensoredName": "Odelay",
    "artistViewUrl": "https://itunes.apple.com/us/artist/beck/312095?uo=4",
    "collectionViewUrl": "https://itunes.apple.com/us/album/odelay/19820496?uo=4",
    "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/c0/86/7a/c0867ad4-d8fd-3cf1-ebac-a15fd42b6904/source/60x60bb.jpg",
    "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music7/v4/c0/86/7a/c0867ad4-d8fd-3cf1-ebac-a15fd42b6904/source/100x100bb.jpg",
    "collectionPrice": 5.99,
    "collectionExplicitness": "notExplicit",
    "trackCount": 15,
    "copyright": "℗ 2004 DGC Records",
    "country": "USA",
    "currency": "USD",
    "releaseDate": "2004-01-01T08:00:00Z",
    "primaryGenreName": "Rock"
  }]

  const results = parseAlbumData(exampleData)
  
  expect(results.length).toBe(exampleData.length)
});