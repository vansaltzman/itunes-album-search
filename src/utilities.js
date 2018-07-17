import axios from 'axios'


export function searchAlbums(term) {
  const url = ' https://itunes.apple.com/search'

  return axios.get(url, {params: {
    term,
    entity: 'album',
    limit: 100,
  }})
  .then( results => {
    return {status: 'SUCCESS', albums: results.data.results}
  })
  .catch( err => {
    console.log(err)
    return {status: 'BAD_REQUEST', albums: []}
  })
}

export const fallbackCover = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ITunes_12.2_logo.png/100px-ITunes_12.2_logo.png'

export function parseAlbumData(albums) {
  return albums.map( album => {
    return {
      id: album.collectionId,
      title: album.collectionName || '',
      artist: album.artistName || '',
      link: album.viewUrl || '',
      coverSmall: album.artworkUrl60 || fallbackCover,
      coverNormal: album.artworkUrl100 || fallbackCover,
      coverLarge: album.artworkUrl100 ? album.artworkUrl100.split('source')[0] + 'source/600x600bb.jpg' : fallbackCover
    }
  })
}