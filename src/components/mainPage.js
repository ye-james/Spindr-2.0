import React, { useState, useEffect } from "react";
import Card from "./card";
import * as Spotify from '../api/fetch';

export default function MainPage(props){
  const [recommendedTracks, setRecommendedTracks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    Spotify.getRecommendations('pop').then(data => {
      console.log(data)
      setRecommendedTracks(data.trackDetails)});
  }, []);

  
  return(
    //div for flex container
  <div id="main-page-container">
    {/* //input tag */}
    <div className='container1' id='searchbar'>
      
      <input onChange={(e) => setInputValue(e.target.value)}  value={inputValue} placeholder="Enter Genre here"></input>
      <button id='searchbutton' onClick={props.getRecommendations}>Search</button>
    </div>
      <Card musicList={props.musicList} recommendedTracks={recommendedTracks}/>
  </div>
   
  )
}

