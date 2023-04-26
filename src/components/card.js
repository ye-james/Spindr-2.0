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
export default function Card(props) {


  const [lastDirection, setLastDirection] = useState();
  
  const swiped = (direction, nameToDelete) => {
    console.log(direction)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name = 'left the screen!')
  }


  const playAudio = () => {
    const sound = new Howl({
      src: 'https://p.scdn.co/mp3-preview/30a5d9f993ed4a46b8e9d8fd52393f58b25fb370?cid=bba3237352b24f7194d0f1145475350c',
      html5: true,
      volume:0.1,

    })

    sound.play()
  }

  return (
    <div className='cardContainer'> 
      {images.map((img) => {
        return <TinderCard className='swipe' key={img} onSwipe={(dir) => swiped(dir, img)} onCardLeftScreen={() => outOfFrame(img)} preventSwipe={['up', 'down']}>
          <div className='card container1' style={{backgroundImage: `url(${img})`}}>
          </div>
          <p>{props.musicList}</p>
          <button id='playButton' onClick={() => playAudio()}>Play</button>

        </TinderCard>
      })
      }  
    </div>
  )
}