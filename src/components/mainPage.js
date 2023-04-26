import React, { useState, useEffect } from "react";
import Card from "./card";
import * as Spotify from '../api/fetch';

export default function MainPage(props){
  const [recommendedTracks, setRecommendedTracks] = useState([]);

  useEffect(() => {
    Spotify.getRecommendations("pop").then(data => console.log(data));

  }, []);
  
  return(
    //div for flex container
  <div id="main-page-container">
    {/* //input tag */}
    <div className='container1' id='searchbar'>
      
      <input onChange={props.handleOnChange} placeholder="Enter Genre here"></input>
      <button id='searchbutton' onClick={props.getRecommendations}>Search</button>
    </div>
    <Card musicList={props.musicList}/>
   {/* //link button for playlist? */}
   {/* <ReactHowler src="https://p.scdn.co/mp3-preview/30a5d9f993ed4a46b8e9d8fd52393f58b25fb370?cid=bba3237352b24f7194d0f1145475350c" playing={true}/> */}
  </div>
   
  )
}

