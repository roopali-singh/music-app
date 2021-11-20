import React from "react";
import "./Footer.css";
import { useStateValue } from "./StateProvider";
// import AudioSpectrum from "react-audio-spectrum";
// import { Visualizer } from "react-music-visualizer";

import StopIcon from "@material-ui/icons/Stop";

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
      <div className="footer__forSoundEffect">
        {/* <Visualizer
          audioPreviewUrl={source}
          canvasWidth={512}
          canvasHeight={51}
          fftSize={256}
          drawFunc={{
            canvasColor: "rgb(21, 16, 25)",
            lineColor: "rgb(136, 200, 255)",
            lineAmount: 4,
            strokeWidth: 2,
          }}
        /> */}
        {/* <AudioSpectrum
          // id="audio-canvas"
          height={200}
          width={300}
          audioId={"audioIdElement"}
          capColor={"red"}
          capHeight={2}
          meterWidth={10}
          meterCount={512}
          meterColor={[
            { stop: 0, color: "#f00" },
            { stop: 0.5, color: "#0CD7FD" },
            { stop: 1, color: "red" },
          ]}
          gap={10}
        /> */}
      </div>
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
