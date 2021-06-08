import React from "react";
import "./Footer.css";
import { useStateValue } from "./StateProvider";
import StopIcon from "@material-ui/icons/Stop";

function Footer({ audioPlayer, allAudioPlayer }) {
  const [{ name }, dispatch] = useStateValue();

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
      {/* <div className="footer__forSoundEffect">
            <SoundEffect />
          </div> */}
      <section className="footer__forlargeScreens">
        <div className="footer__songName">{name}</div>
        <StopIcon
          style={{ fontSize: 20 }}
          className="footer__stopButton"
          onClick={stopSong}
        />
      </section>
    </footer>
  );
}

export default Footer;
