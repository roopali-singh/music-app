import React, { useEffect } from "react";
import "./BoxHeader2.css";
import { useStateValue } from "./StateProvider";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Tooltip from "@material-ui/core/Tooltip";

function BoxHeader2({ allAudioPlayer, setDuration, setCurrentTiming }) {
  const [{ songData, allSource, i, f }, dispatch] = useStateValue();

  const n = songData?.length;

  // TO PLAY ALL SONGS /////////////////////////////////////////////////////////////////

  useEffect(() => {
    function changeAllSource() {
      if (f === 1) {
        allAudioPlayer.current.src = allSource;
        allAudioPlayer.current.load();
        allAudioPlayer.current.play();
        allAudioPlayer.current.onloadedmetadata = () => {
          setDuration(allAudioPlayer.current.duration);
        };
        allAudioPlayer.current.ontimeupdate = () => {
          setCurrentTiming(allAudioPlayer.current.currentTime);
        };
        allAudioPlayer.current.onended = playAllSongs2;
      }
    }
    changeAllSource();
  }, [allSource, f]);

  useEffect(() => {
    function toChangeI() {
      if (f === 1) {
        playAllSongs1();
      }
    }
    toChangeI();
  }, [i]);

  // TO PLAY ALL SONGS //////////////////////////////////////////////////////////////////////

  function playAllSongs() {
    dispatch({
      type: "SET_F",
      f: 1,
    });
    const boxHeader2__icon = document.querySelector(".boxHeader2__icon");
    boxHeader2__icon.classList.toggle("active");
    playAllSongs1();
  }

  function playAllSongs1() {
    dispatch({
      type: "CHANGE_ALL_SONG_SOURCE",
      allSource: songData[i]?.path,
    });

    dispatch({
      type: "CHANGE_SONG_NAME",
      name: songData[i]?.name,
    });
  }

  function playAllSongs2() {
    if (i === n - 1) {
      dispatch({
        type: "SET_I",
        i: 0,
      });
    } else {
      dispatch({
        type: "SET_I",
        i: i + 1,
      });
    }
  }

  return (
    <div className="boxHeader2">
      {/* <span
        title="Play All Songs"
        className="boxHeader2__icon"
      > */}
      <Tooltip title="Play All" placement="top">
        <PlayCircleFilledIcon
          fontSize="large"
          className="boxHeader2__icon"
          onClick={playAllSongs}
        />
      </Tooltip>
      {/* </span> */}
      <h3 className="boxHeader2__heading">The Playlist</h3>
    </div>
  );
}

export default BoxHeader2;
