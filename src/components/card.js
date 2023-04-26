import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import TinderCard from 'react-tinder-card'; //external module
import {Howl, Howler} from 'howler';



const images = [
  'https://picsum.photos/400/600',
  'https://picsum.photos/401/601',
  'https://picsum.photos/402/602',
  'https://picsum.photos/403/603',
  'https://picsum.photos/404/604',
];

//https://p.scdn.co/mp3-preview/30a5d9f993ed4a46b8e9d8fd52393f58b25fb370?cid=bba3237352b24f7194d0f1145475350c
export default function Card({musicList, recommendedTracks}) {
  console.log(recommendedTracks);

  const [lastDirection, setLastDirection] = useState();
  const [currentSong, setCurrentSong] = useState();
  
  const swiped = (direction, nameToDelete) => {
    console.log(direction)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name = 'left the screen!')
    console.log(currentSong)
    stopAudio();
  }

  const stopAudio = () => {
    currentSong.stop();
  }

  const pauseAudio = () => {
    currentSong.pause();
  }

  const playAudio = (audioLink) => {
    const sound = new Howl({
      src: audioLink,
      html5: true,
      volume:0.1,

    })  
    setCurrentSong(sound);

    sound.play()
  }

  return (

    <div className='cardContainer'> 
        {recommendedTracks.length > 0 && (
    recommendedTracks.map(track => {
         return <TinderCard className='swipe' key={track.albumImg.url} onSwipe={(dir) => swiped(dir, track.albumImg.url)} onCardLeftScreen={() => outOfFrame(track.albumImg.url)} preventSwipe={['up', 'down']}>
          <div className='card container1' style={{backgroundImage: `url(${track.albumImg.url})`}}>
          </div>
          <p>{musicList}</p>
          <button id='playButton' onClick={() => playAudio(track.previewUrl)}>Play</button>
          <button id='pauseButton' onClick={() => pauseAudio()}>Pause</button>
        </TinderCard>
    }
    )
        )}
    </div>
  )
}