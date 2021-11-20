import React from "react";
import "./Footer.css";
import { useStateValue } from "./StateProvider";

import StopIcon from "@material-ui/icons/Stop";
import Tooltip from "@material-ui/core/Tooltip";

function Footer({ audioPlayer, allAudioPlayer }) {
  const [{ name, source }, dispatch] = useStateValue();
  audioPlayer.current.id = "audioIdElement";

  function stopSong() {
    audioPlayer.current.pause();
    allAudioPlayer.current.pause();
    dispatch({
      type: "SET_F",
      f: 0,
    });
  }

  return (
    <footer className="footer">
      <div className="footer__forSoundEffect"></div>
      <section className="footer__forlargeScreens">
        <div className="footer__songName">{name}</div>
        <Tooltip title="Stop" placement="top">
          <StopIcon
            style={{ fontSize: 20 }}
            className="footer__stopButton"
            onClick={stopSong}
          />
        </Tooltip>
      </section>
    </footer>
  );
}

export default Footer;
