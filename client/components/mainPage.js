import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import Card from "./card";
import * as Spotify from "../api/fetch";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";
import Playlist from "./playlist";
import debounce from "lodash.debounce";

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

  useEffect(() => {
    return () => {
      debouncedAddToPlaylist.cancel();
    };
  }, []);

  const addToPlaylist = useCallback(
    (song) => {
      axios
        .post("http://localhost:3000/playlist", {
          song,
        })
        .then((result) => {
          console.log(result);
          if (result.data.success) {
            setPlaylist((prevPlaylist) => {
              const updatedPlaylist = [...prevPlaylist];
              // check if song is already in the playlist
              const songExists = updatedPlaylist.some((item) => item === song);
              if (!songExists) {
                updatedPlaylist.push(song);
              }
              return updatedPlaylist;
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [setPlaylist]
  );

  const debouncedAddToPlaylist = useCallback(
    debounce(
      (song) => {
        addToPlaylist(song);
      },
      200,
      { leading: false }
    ),
    [addToPlaylist]
  );

  return (
    <>
      {/* //div for flex container */}
      <div className="mainPageContainer">
        <NavBar />
        <div className="mainCardContainer">
          {currentCard && (
            <Card
              recommendedTracks={recommendedTracks}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              playlist={playlist}
              setPlaylist={setPlaylist}
              debouncedAddToPlaylist={debouncedAddToPlaylist}
            />
          )}
        </div>
        <Playlist playlist={playlist} setPlaylist={setPlaylist} />
      </div>
    </>
  );
}
