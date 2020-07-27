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
  }]

// caching the DOM

const coverEl = document.querySelector(".cover__image");
const songsCounterEl = document.querySelector(".songs__counter");
const playButtonLeftEl = document.querySelector(".play__button");
const playButtonRightEl = document.querySelector(".play__button__right");
const titleAlbumEl = document.querySelector(".title__album");
const titleSongEl = document.querySelector(".title__song");
const songDuration = document.querySelector("song__duration");

