// Songs List

const songsList = [{
    "id": "1",
    "url": "../../music/morrowind.mp3",
    "time": "04:22",
    "title": "Morrowind",
    "artist": "Bethesda"
  },
  {
    "id": "2",
    "url": "../../music/45 Piosenka dzieci z Bullerbyn.mp3",
    "time": "03:19",
    "title": "Dzieci z Bullerbyn",
    "artist": "Astrid Lingren"
  },
  {
    "id": "3",
    "url": "../../music/Bocian bocian Ga Ga Ga.mp3",
    "time": "05:52",
    "title": "Bocian Bocian Ga Ga Ga",
    "artist": "Bocian team"
  }
]

// caching the DOM

const coverEl = document.querySelector(".cover__image");
const songsCounterEl = document.querySelector(".songs__counter");
const playButtonLeftEl = document.querySelector(".play__button");
const titleAlbumEl = document.querySelector(".title__album");
const titleSongEl = document.querySelector(".title__song");
const songDuration = document.querySelector(".song__duration");
const audio = document.querySelector("audio");
let playModule = document.querySelector(".play__module");

// Objects and methods

let songId = 0;

const createModule = () => {
  let html = '';
  playModule.innerHTML = `
  <div class="play__module__content">
    <div class="play__button__right">
        &#9658; 
        <audio src="music/morrowind.mp3"></audio>
    </div>
    <div class="title__area">
      <div class="title__content">
        <p class="title__album">${songsList[songId]["title"]}</p>
        <p class="title__song">${songsList[songId]["artist"]}</p>
      </div>
    </div>
    <div class="song__duration">${songsList[songId]["time"]}</div>
  </div>`
}

createModule();

const playButtonRightEl = document.querySelector(".play__button__right");

const play = () => {
  playButtonRightEl.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
    } else audio.pause();
  })
}

play();

// const renderPlaylistModule = () => {

//   songDuration.innerHTML = songsList[songId]["time"];
//   titleAlbumEl.innerHTML = songsList[songId]["artist"];
//   titleSongEl.innerHTML = songsList[songId]["title"];
//   play();

// }

const renderPlaylist = () => {}

// renderPlaylistModule();
