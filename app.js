// Récupération et affichage des données
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

function getRecently() {
  fetch("./data/mainData.json")
    .then((response) => response.json())
    .then((data) => displayRecently(data.recently))
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

function displayRecently(recently) {
  const recentlyListened = document.getElementById("recently-list");
  recently.forEach((recent, index) => {
    const liRecent = document.createElement("li");
    const divRecent = document.createElement("div");
    const divRecentContent = document.createElement("div");
    const divRecentImgContent = document.createElement("div");
    const divRecentImg = document.createElement("div");
    const divRecentPlayBtn = document.createElement("div");
    const btn = document.createElement("button");
    const divRecentText = document.createElement("div");
    const imgRecent = document.createElement("img");
    const pRecent = document.createElement("p");
    const spanRecent = document.createElement("span");
    const svg = `<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="play-btn"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>`;
    const svgFirstElement = `<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="pause-btn"><path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>`;
    divRecent.setAttribute("class", "recents");
    divRecentContent.setAttribute("class", "recents-content");
    divRecentImgContent.setAttribute("class", "recents-content_imgContent");
    divRecentImg.setAttribute("class", "recents-content_imgContent__img");
    btn.setAttribute("class", "playBtn");
    divRecentText.setAttribute("class", "recents-text");
    imgRecent.src = recent.image;
    imgRecent.alt = recent.alt;
    pRecent.textContent = recent.name;
    spanRecent.textContent = recent.from;

    if (index === 0) {
      btn.innerHTML = svgFirstElement;
      divRecentPlayBtn.setAttribute(
        "class",
        "recents-content_imgContent__btn selected"
      );
    } else {
      btn.innerHTML = svg;
      divRecentPlayBtn.setAttribute("class", "recents-content_imgContent__btn");
    }

    recentlyListened.appendChild(liRecent);
    liRecent.appendChild(divRecent);
    divRecent.appendChild(divRecentContent);
    divRecentContent.appendChild(divRecentImgContent);
    divRecentImgContent.appendChild(divRecentImg);
    divRecentImg.appendChild(imgRecent);
    divRecentImgContent.appendChild(divRecentPlayBtn);
    divRecentPlayBtn.appendChild(btn);
    divRecentContent.appendChild(divRecentText);
    divRecentText.appendChild(pRecent);
    divRecentText.appendChild(spanRecent);
  });
}

function loadContent() {
  Promise.all([getArtists(), getPlaylists(), getAlbums(), getRecently()])
    .then(([artists, playlists, albums, recently]) => {
      displayArtists(artists);
      displayPlaylists(playlists);
      displayAlbums(albums);
      displayRecently(recently);
    })
    .catch((error) => console.log(error));
}

window.onload = loadContent;

//Event on scroll

const navbarTop = document.querySelector(".navbar-library_top");
const contentLibrary = document.querySelector(".navbar-library");

contentLibrary.addEventListener("scroll", (e) => {
  if (contentLibrary.scrollTop > 0) {
    navbarTop.style.boxShadow = "0 6px 10px rgba(0,0,0,.6)";
  } else {
    // Si la position de scroll est en haut, retire le style
    navbarTop.style.boxShadow = "none";
  }
});
