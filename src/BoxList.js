import React from "react";
import "./BoxList.css";
import { useStateValue } from "./StateProvider";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function BoxList({
  song,
  audioPlayer,
  setDuration,
  setCurrentTiming,
  white,
  setWhite,
}) {
  const [{ favourite }, dispatch] = useStateValue();
  const favouriteCheck = favourite.find((songId) => songId._id === song._id);

  // ADD TO FAVOURITES //////////////////////////////////////////////////////////////////////
  function favouriteList() {
    dispatch({
      type: "FAVOURITE_LIST",
      item: {
        _id: song?._id,
        name: song?.name,
        singer: song?.singer,
      },
    });
  }

  //TO PLAY THE DESIRED SONG ///////////////////////////////////////////////////////////////

  function playSong(path, thisId, name) {
    // TO CHANGE TO WHITE COLOR: PLAY BUTTON

    setWhite(thisId);

    // NOW THE FUNCTION

    audioPlayer.current.src = path;
    audioPlayer.current.load();
    audioPlayer.current.play();
    audioPlayer.current.onloadedmetadata = () => {
      setDuration(audioPlayer.current.duration);
    };
    audioPlayer.current.ontimeupdate = () => {
      setCurrentTiming(audioPlayer.current.currentTime);
    };
    audioPlayer.current.loop = true;

    dispatch({
      type: "CHANGE_SONG_SOURCE",
      source: path,
    });

    dispatch({
      type: "CHANGE_SONG_NAME",
      name: name,
    });
  }

  return (
    <div className="boxList">
      <section className="boxList__data">
        <button
          title="add-to-favourite"
          className="boxList__data-button"
          onClick={() => favouriteList()}
        >
          <MusicNoteIcon
            fontSize="small"
            className={`boxList__favourite-icon ${
              favouriteCheck?._id === song?._id
                ? "forFavouriteColor"
                : "forNotFavouriteColor"
            }`}
          />
        </button>
        <span className="boxList__data-info">
          {song?.name} by {song?.singer}
        </span>
      </section>
      <PlayArrowIcon
        key={song?._id}
        style={{
          fontSize: 35,
        }}
        className={`boxList__play-icon ${
          white === song?._id ? "forWhite" : "forColor"
        }`}
        onClick={() => {
          playSong(song?.path, song?._id, song?.name);
        }}
      />
    </div>
  );
}

export default BoxList;
