import React, { useState } from "react";

export default function Playlist() {
  const list = [
    {
      songTitle: "The quick brown fox jumps over the lazy dog",
      id: 1,
    },
    {
      songTitle: "The quick brown fox jumps over the lazy dog",
      id: 2,
    },
    {
      songTitle: "The quick brown fox jumps over the lazy dog",
      id: 3,
    },
    {
      songTitle: "The quick brown fox jumps over the lazy dog",
      id: 4,
    },
    {
      songTitle: "The quick brown fox jumps over the lazy dog",
      id: 5,
    },
    {
      songTitle: "The quick brown fox jumps over the lazy dog",
      id: 6,
    },
  ];

  const removeSong = (id) => {
    console.log(id);
  };

  return (
    <div>
      <ul className="playlist-container">
        <h3>Swiped-Right Playlist</h3>

        <div className="list-container">
          {list.map((song) => {
            return (
              <li key={song.id}>
                <div className="textBox">
                  <span>The quick brown fox jumps over the lazy dog</span>
                </div>
                <button className="btn-del" onClick={() => removeSong(song.id)}>
                  -
                </button>
              </li>
            );
          })}
        </div>
      </ul>
      <button>Create Playlist on Spotify</button>
    </div>
  );
}
