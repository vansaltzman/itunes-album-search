import axios from 'axios';

export const fallbackCover = 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG';

export function parseAlbumData(albums) {
  return albums.map(album => (
    {
      id: album.collectionId,
      title: album.collectionName || '',
      artist: album.artistName || '',
      link: album.collectionViewUrl || '',
      coverSmall: album.artworkUrl60 || fallbackCover,
      coverNormal: album.artworkUrl100 || fallbackCover,
      coverLarge: (album.artworkUrl100 ? `${album.artworkUrl100.split('source')[0]}source/600x600bb.jpg` : fallbackCover),
    }
  ));
}

export function searchAlbums(term) {
  const url = ' https://itunes.apple.com/search/';

  return axios.get(url, {
    params: {
      term,
      entity: 'album',
      attribute: 'artistTerm',
      limit: 100,
    },
  })
    .then(({ data: { resultCount, results } }) => {
      if (resultCount > 0) {
        const albums = parseAlbumData(results);
        return { status: 'SUCCESS', albums };
      }
      return { status: 'NO_RESULTS', albums: [] };
    })
    .catch((err) => {
      console.log(err);
      return { status: 'ERROR', albums: [] };
    });
}
