import React, { useState } from "react";
import axios from "axios";

export default function Playlist({ playlist, setPlaylist }) {
  console.log(playlist);
  const removeSong = (song) => {
    //make axios request to backend to delete
    axios
      .delete("http://localhost:3000/playlist", {
        data: {
          song,
        },
      })
      .then((result) => {
        console.log(result);
        if (result.data.success) {
          const updatedPlaylist = playlist.filter(
            (s) => s.trackUri !== song.trackUri
          );
          console.log(updatedPlaylist);
          setPlaylist(updatedPlaylist);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="playlistContainer">
      <ul className="playlist-container">
        <h3>Swiped-Right Playlist</h3>

        <div className="list-container">
          {/* {playlist.map((song, index) => {
            return (
              <li key={index}>
                <div className="textBox">
                  <span>{`${song.artistName[0].name} - ${song.trackName}`}</span>
                </div>
                <button className="btn-del" onClick={() => removeSong(song)}>
                  -
                </button>
              </li>
            );
          })} */}
        </div>
      </ul>
      <button className="playlistBtn">Create Playlist on Spotify</button>
    </div>
  );
}
