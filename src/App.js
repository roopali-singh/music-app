import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import { useStateValue } from "./StateProvider";
import SearchBox from "./SearchBox";

function App() {
  const [{ songData, allSource, i, f, name }, dispatch] = useStateValue();
  const [white, setWhite] = useState();
  const [duration, setDuration] = useState("00:00");
  const [currentTiming, setCurrentTiming] = useState("00:00");

  const n = songData?.length;

  // TO PLAY ALL SONGS

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

  // TO TOGGLE TO DARK MODE

  function toToggle() {
    const toggle = document.querySelector(".toggle");
    const wave = document.querySelector(".wave");
    const outer__heading = document.querySelector(".outer__heading");
    const footer = document.querySelector(".footer");

    toggle.classList.add("animate");

    setTimeout(() => {
      toggle.classList.toggle("active");
      wave.classList.toggle("active");
      outer__heading.classList.toggle("active");
      footer.classList.toggle("active");
    }, 150);

    setTimeout(() => toggle.classList.remove("animate"), 300);
  }

  // SECONDS TO HH:MM:SS

  function hms(second) {
    var sec_num = parseInt(second, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (
      // hours + ":" +
      minutes + ":" + seconds
    );
  }

  //TO PLAY THE DESIRED SONG

  const audioPlayer = useRef(new Audio());
  // const playButton = useRef(null);

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

  // TO STOP THE SONGS

  function stopSong() {
    audioPlayer.current.pause();
    allAudioPlayer.current.pause();
    dispatch({
      type: "SET_F",
      f: 0,
    });
  }

  // TO PLAY ALL SONGS

  const allAudioPlayer = useRef(new Audio());

  function playAllSongs() {
    dispatch({
      type: "SET_F",
      f: 1,
    });
    const circle = document.querySelector(".circle");
    circle.classList.toggle("active");
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

  function toSetRangeInput(range) {
    // dispatch({
    //   type: "CHANGE_RANGE_INPUT",
    //   rangeInput: range,
    // });
    audioPlayer.current.currentTime = range;
    allAudioPlayer.current.currentTime = range;
  }

  return (
    <div className="app">
      {/* <div className="header"> */}
      <span className="toggle" onClick={toToggle}></span>
      <span class="wave"></span>
      {/* </div> */}
      <div className="outer__box">
        <div>
          <h1 className="outer__heading">
            Music App{" "}
            <HeadsetMicIcon
              style={{ fontSize: 40 }}
              className="outerHeading-icon-margin"
            />
          </h1>
        </div>
        <SearchBox />
        <div className="inner__box">
          <div className="forPlayAll">
            <span title="Play All Songs">
              <PlayCircleFilledIcon
                fontSize="large"
                className="circle forColor"
                onClick={playAllSongs}
              />
            </span>
            <h3 className="inner__heading">The Playlist</h3>
          </div>
          <ul>
            {songData?.map((song) => (
              <li key={song?._id}>
                <div className="inner__list-above">
                  <div className="list__options">
                    <MusicNoteIcon fontSize="small" className="forColor" />
                    <span className="addBefore">
                      {song?.name} by {song?.singer}
                    </span>
                  </div>
                  <PlayArrowIcon
                    key={song?._id}
                    style={{
                      fontSize: 35,
                    }}
                    className={`playButton ${
                      white === song?._id ? "forWhite" : "forColor"
                    }`}
                    onClick={() => {
                      playSong(song?.path, song?._id, song?.name);
                    }}
                  />
                </div>
                {white === song?._id && (
                  <div className="list__forRange">
                    <input
                      className="range__input"
                      type="range"
                      min="0"
                      max={duration}
                      // step="0.25"
                      value={currentTiming}
                      onChange={(e) => toSetRangeInput(e.target.value)}
                    />
                    <div className="list__forTiming">
                      <span>{hms(currentTiming)}</span>
                      <span>{hms(duration)}</span>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer">
          {/* <div className="footer__forSoundEffect">
            <SoundEffect />
          </div> */}
          <div className="footer__forlargeScreens">
            {/* <div className="footer__forRange">
              <input
                className="range__input"
                type="range"
                min="0"
                max={duration}
                // step="0.25"
                value={currentTiming}
                onChange={(e) => toSetRangeInput(e.target.value)}
              />
              <div className="footer__forTiming">
                <span>{hms(currentTiming)}</span>
                <span>{hms(duration)}</span>
              </div>
            </div> */}
            <div className="footer__songName">{name}</div>
            <StopIcon
              style={{ fontSize: 20 }}
              className="stopButton"
              onClick={stopSong}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
