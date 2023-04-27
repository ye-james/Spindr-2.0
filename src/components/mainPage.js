import React, { useState, useEffect } from "react";
import Card from "./card";
import * as Spotify from '../api/fetch';
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";

export default function MainPage(props){
  const [recommendedTracks, setRecommendedTracks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const location = useLocation();
  console.log(location.state , 'genre inside Main page from explore');
  
  // Disadvantage of using useLocation() - If the user refreshes the page or directly navigates to the route, the data will be lost. 
  // To handle this, you can use other methods like URL parameters, context, or Redux.
  useEffect(() => {
   
    Spotify.getRecommendations(location.state.genre.toLowerCase()).then(data => {
      console.log(data)
      setRecommendedTracks(data.trackDetails)});
  }, []);

  return(
    <>
    <div className="mainPageContainer">
      <NavBar/>
      <div className="mainCardContainer">
        <Card musicList={props.musicList} recommendedTracks={recommendedTracks}/>
      </div>
    </div>
  
   
   
   </>
  )
}

