import React from "react";
import "./Footer.css";
import { useStateValue } from "./StateProvider";

import StopIcon from "@material-ui/icons/Stop";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

function Footer({ audioPlayer, allAudioPlayer }) {
  const [{ name, source }, dispatch] = useStateValue();
  audioPlayer.current.id = "audioIdElement";

  // TOOLTIP ////////////////////////////////////////

  const useStyles = makeStyles((theme) => ({
    tooltip: {
      backgroundColor: "#735bc1",
      fontSize: 11.5,
    },
  }));

  function StyledTooltip(props) {
    const classes = useStyles();

    return <Tooltip classes={classes} {...props} />;
  }

  //////////////////////////////////////////////////

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
        <StyledTooltip title="Stop" placement="top">
          <StopIcon
            style={{ fontSize: 20 }}
            className="footer__stopButton"
            onClick={stopSong}
          />
        </StyledTooltip>
      </section>
    </footer>
  );
}

export default Footer;
