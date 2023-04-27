import React, { useState, useRef } from "react";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import TinderCard from "react-tinder-card"; //external module
import { Howl, Howler } from "howler";

//https://p.scdn.co/mp3-preview/30a5d9f993ed4a46b8e9d8fd52393f58b25fb370?cid=bba3237352b24f7194d0f1145475350c
export default function Card({ musicList, recommendedTracks, addToPlaylist }) {
  console.log(recommendedTracks);

  const [currentSong, setCurrentSong] = useState();
  const refs = useRef([]);

  function setRef(e, index, song) {
    console.log(e);
    refs.current[index] = song;
  }

  const swiped = (direction, nameToDelete) => {
    console.log(direction);
  };

  const outOfFrame = (dir, index, song) => {
    console.log("direction from outOfFrame ", dir);
    console.log("current track to add to playlist:", song);
    if (dir === "right") {
      addToPlaylist(refs.current[index]);
      //console.log(currentSong);
      stopAudio();
    }
  };

  const stopAudio = () => {
    currentSong.stop();
  };

  const pauseAudio = () => {
    currentSong.pause();
  };

  const playAudio = (audioLink) => {
    const sound = new Howl({
      src: audioLink,
      html5: true,
      volume: 0.1,
    });
    setCurrentSong(sound);

    sound.play();
  };

  return (
    <div className="cardContainer">
      {recommendedTracks.length > 0 &&
        recommendedTracks.map((track, index) => {
          // console.log(track);

          const artists = [];
          for (const artist of track.artistName) {
            artists.push(artist.name);
          }
          return (
            <TinderCard
              ref={(e) => setRef(e, index, track)}
              flickOnSwipe
              className="swipe"
              key={track.albumImg.url}
              onSwipe={(dir) => swiped(dir, track.albumImg.url)}
              onCardLeftScreen={(dir) => outOfFrame(dir, index, track)}
              preventSwipe={["up", "down"]}
            >
              <div
                className="card container1"
                style={{ backgroundImage: `url(${track.albumImg.url})` }}
              ></div>
              {/* <p className="">{`${artists.join(", ")} - ${track.trackName}`}</p> */}
              <button
                id="playButton"
                onClick={() => playAudio(track.previewUrl)}
              >
                Play
              </button>
              <button id="pauseButton" onClick={() => stopAudio()}>
                Stop
              </button>
            </TinderCard>
          );
        })}
    </div>
  );
}
