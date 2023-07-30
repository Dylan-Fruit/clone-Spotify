function getArtists() {
  fetch("./data/dataArtists.json")
    .then((response) => response.json())
    .then((data) => displayArtists(data.artists))
    .catch((error) => console.log(error));
}

function getPlaylists() {
  fetch("./data/dataArtists.json")
    .then((response) => response.json())
    .then((data) => displayPlaylists(data.playlists))
    .catch((error) => console.log(error));
}

function getAlbums() {
  fetch("./data/dataArtists.json")
    .then((response) => response.json())
    .then((data) => displayAlbums(data.albums))
    .catch((error) => console.log(error));
}

function displayArtists(artists) {
  const Librarylist = document.getElementById("library-list");
  artists.forEach((artiste) => {
    const liArtist = document.createElement("li");
    const divArtist = document.createElement("div");
    const divArtistImg = document.createElement("div");
    const imgArtist = document.createElement("img");
    const pArtist = document.createElement("p");

    divArtist.setAttribute("class", "artists");
    divArtistImg.setAttribute("class", "artists-img");
    imgArtist.src = artiste.image;
    imgArtist.alt = artiste.alt;
    pArtist.textContent = artiste.name;

    Librarylist.appendChild(liArtist);
    liArtist.appendChild(divArtist);
    divArtist.appendChild(divArtistImg);
    divArtistImg.appendChild(imgArtist);
    divArtist.appendChild(pArtist);
  });
}

function displayPlaylists(playlists) {
  const Librarylist = document.getElementById("library-list");
  playlists.forEach((playlist) => {
    const liPlaylist = document.createElement("li");
    const divPlaylist = document.createElement("div");
    const divPlaylistImg = document.createElement("div");
    const divPlaylistText = document.createElement("div");
    const imgPlaylist = document.createElement("img");
    const pPlaylist = document.createElement("p");
    const spanPlaylist = document.createElement("span");

    divPlaylist.setAttribute("class", "playlists");
    divPlaylistImg.setAttribute("class", "playlists-img");
    divPlaylistText.setAttribute("class", "playlists-text");
    imgPlaylist.src = playlist.image;
    imgPlaylist.alt = playlist.alt;
    pPlaylist.textContent = playlist.name;
    spanPlaylist.textContent = `${playlist.type} • ${playlist.creator}`;

    Librarylist.appendChild(liPlaylist);
    liPlaylist.appendChild(divPlaylist);
    divPlaylist.appendChild(divPlaylistImg);
    divPlaylistImg.appendChild(imgPlaylist);
    divPlaylist.appendChild(divPlaylistText);
    divPlaylistText.appendChild(pPlaylist);
    divPlaylistText.appendChild(spanPlaylist);
  });
}

function displayAlbums(albums) {
  const Librarylist = document.getElementById("library-list");
  albums.forEach((album) => {
    const liAlbums = document.createElement("li");
    const divAlbum = document.createElement("div");
    const divAlbumImg = document.createElement("div");
    const divAlbumText = document.createElement("div");
    const imgAlbum = document.createElement("img");
    const pAlbum = document.createElement("p");
    const spanAlbum = document.createElement("span");

    divAlbum.setAttribute("class", "albums");
    divAlbumImg.setAttribute("class", "albums-img");
    divAlbumText.setAttribute("class", "albums-text");
    imgAlbum.src = album.image;
    imgAlbum.alt = album.alt;
    pAlbum.textContent = album.name;
    spanAlbum.textContent = `${album.type} • ${album.creator}`;

    Librarylist.appendChild(liAlbums);
    liAlbums.appendChild(divAlbum);
    divAlbum.appendChild(divAlbumImg);
    divAlbumImg.appendChild(imgAlbum);
    divAlbum.appendChild(divAlbumText);
    divAlbumText.appendChild(pAlbum);
    divAlbumText.appendChild(spanAlbum);
  });
}

function loadContent() {
  Promise.all([getArtists(), getPlaylists(), getAlbums()])
    .then(([artists, playlists, albums]) => {
      displayArtists(artists);
      displayPlaylists(playlists);
      displayAlbums(albums);
    })
    .catch((error) => console.log(error));
}

window.onload = loadContent;
