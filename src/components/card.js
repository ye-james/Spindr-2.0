import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import TinderCard from "react-tinder-card"; //external module
import { Howl, Howler } from "howler";

const images = [
  "https://picsum.photos/400/600",
  "https://picsum.photos/401/601",
  "https://picsum.photos/402/602",
  "https://picsum.photos/403/603",
  "https://picsum.photos/404/604",
];

//https://p.scdn.co/mp3-preview/30a5d9f993ed4a46b8e9d8fd52393f58b25fb370?cid=bba3237352b24f7194d0f1145475350c
export default function Card({ musicList, recommendedTracks }) {
  console.log(recommendedTracks);

  const [lastDirection, setLastDirection] = useState();
  const [currentSong, setCurrentSong] = useState();
  const [audio, setAudio] = useState('notPlaying');
  const [songIndex, setSongIndex] = useState();

  useEffect(() => {
    // set initial song index once recommendedTracks has loaded
    if (!songIndex && recommendedTracks.length) {
      setSongIndex(recommendedTracks.length - 1);
    }
    else {
      // display song details (name, artist, etc.)
      if (songIndex) {
        const nameElement = document.querySelector('#songName');
        nameElement.innerHTML = recommendedTracks[songIndex].trackName;
        const artistsElement = document.querySelector('#artists');
        let artistStr = '';
        const artists = recommendedTracks[songIndex].artistName;
        for (let i = 0; i < artists.length; i++) {
          artistStr += artists[i].name + ', ';
        }
        artistStr = artistStr.slice(0, -2); // remove trailing comma
        artistsElement.innerHTML = artistStr;
      }
    }
  })

  const swiped = (direction, nameToDelete) => {
    console.log(direction);
    setLastDirection(direction);
    setSongIndex(songIndex - 1);
  };

  const outOfFrame = (name) => {
    console.log((name = "left the screen!"));
    console.log(currentSong);
    stopAudio();
  };

  const manageAudio = () => {
    if (audio === 'notPlaying') {
      playAudio(recommendedTracks[songIndex].previewUrl)
    }
    else {
      stopAudio();
    }
  }

  const manageAudioTest = () => {
    if (audio === 'notPlaying') {
      playAudio(recommendedTracks[songIndex].previewUrl)
    }
    else {
      stopAudio();
    }
  }

  const playAudio = (audioLink) => {
    const sound = new Howl({
      src: audioLink,
      html5: true,
      volume: 0.1,
    });
    setCurrentSong(sound);
    setAudio('playing');
    sound.play();
    const buttons = document.querySelectorAll('.audioBtn');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = "Pause";
    }
  };

  const stopAudio = () => {
    currentSong.stop();
    setAudio('notPlaying');
    const buttons = document.querySelectorAll('.audioBtn');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = "Play";
    }
  };

  return (
    <div>
      <div className="cardContainer">
        {recommendedTracks.length > 0 &&
          recommendedTracks.map((track, index) => {
            console.log(track);

            const artists = [];
            for (const artist of track.artistName) {
              artists.push(artist.name);
            }
            return (
              <TinderCard
                flickOnSwipe
                className="swipe"
                key={track.albumImg.url}
                onSwipe={(dir) => swiped(dir, track.albumImg.url)}
                onCardLeftScreen={() => outOfFrame(track.albumImg.url)}
                preventSwipe={["up", "down"]}
              >
                <div
                  className="card container1"
                  style={{ backgroundImage: `url(${track.albumImg.url})` }}
                ></div>
                {/* <p className="">{`${artists.join(", ")} - ${track.trackName}`}</p> */}
                <button
                  className="audioBtn"
                  onClick={() => manageAudio()}>
                  Play
                </button>
                {/* <button id="pauseButton" onClick={() => stopAudio()}>
                  Stop
                </button> */}
              </TinderCard>
            );
          })}
      </div>
      <div className="songDetails">
        <h3 id="songName"></h3>
        <h3 id="artists"></h3>
      </div>
      <button
                  className="audioBtn"
                  onClick={() => manageAudioTest()}>
                  Play
                </button>
    </div>
  );
}
