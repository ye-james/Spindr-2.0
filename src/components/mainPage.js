import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import Playlist from "./playlist";
import * as Spotify from "../api/fetch";

export default function MainPage(props) {
  const [recommendedTracks, setRecommendedTracks] = useState([]);
  const [currentCard, setCurrentCard] = useState();
  const [inputValue, setInputValue] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    setCurrentCard(recommendedTracks[0]);
  }, [recommendedTracks]);

  useEffect(() => {
    Spotify.getRecommendations("pop").then((data) => {
      setRecommendedTracks(data.trackDetails);
    });

    axios.get("http://localhost:3000/playlist").then((response) => {
      console.log("playlist from server", response.data);
    });
  }, []);

  const addToPlaylist = (song) => {
    axios
      .post("http://localhost:3000/playlist", {
        song,
      })
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          const updatedPlaylist = [...playlist];
          updatedPlaylist.push(song);
          setPlaylist(updatedPlaylist);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    //div for flex container
    <div id="main-page-container">
      {/* //input tag */}
      {/* <div className="container1" id="searchbar">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Enter Genre here"
        ></input>
        <button id="searchbutton" onClick={props.getRecommendations}>
          Search
        </button>
      </div> */}
      {currentCard && (
        <Card
          musicList={props.musicList}
          recommendedTracks={recommendedTracks}
          addToPlaylist={addToPlaylist}
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
        />
      )}

      <Playlist playlist={playlist} setPlaylist={setPlaylist} />
    </div>
  );
}
