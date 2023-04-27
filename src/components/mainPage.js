import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./card";
import * as Spotify from "../api/fetch";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";
import Playlist from "./playlist";

export default function MainPage(props) {
  const [recommendedTracks, setRecommendedTracks] = useState([]);
  const [currentCard, setCurrentCard] = useState();
  const [inputValue, setInputValue] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const location = useLocation();
  console.log(location.state, "genre inside Main page from explore");

  useEffect(() => {
    setCurrentCard(recommendedTracks[0]);
  }, [recommendedTracks]);

  useEffect(() => {
    Spotify.getRecommendations(location.state.genre.toLowerCase().replace(/\s/g, '')).then(
      (data) => {
        console.log(data);
        setRecommendedTracks(data.trackDetails);
      }
    );

    axios.get("http://localhost:3000/playlist").then((response) => {
      console.log("playlist from server", response.data[0].favList);
      setPlaylist(response.data[0].favList);
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
    <>
      {/* //div for flex container */}
      <div className="mainPageContainer">
        <NavBar />
        <div className="mainCardContainer">
          {currentCard && (
            <Card
              musicList={props.musicList}
              recommendedTracks={recommendedTracks}
              addToPlaylist={addToPlaylist}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          )}
        </div>
        <Playlist playlist={playlist} setPlaylist={setPlaylist} />
      </div>
    </>
  );
}
