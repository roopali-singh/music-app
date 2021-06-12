import React, { useState } from "react";
import "./Box.css";
import { useStateValue } from "./StateProvider";
// import {
//   addScrollBackgroundColor,
//   removeScrollBackgroundColor,
// } from "./headerFunctions";

import BoxHeader1 from "./BoxHeader1";
import BoxHeader2 from "./BoxHeader2";
import BoxList from "./BoxList";
import BoxRange from "./BoxRange";

function Box({ audioPlayer, allAudioPlayer }) {
  const [{ songData }] = useStateValue();
  const [duration, setDuration] = useState("00:00");
  const [currentTiming, setCurrentTiming] = useState("00:00");
  const [white, setWhite] = useState();


  // const box = document.querySelectorAll(".box").forEach((item) => {
  //   item.addEventListener("scroll", addScrollBackgroundColor);
  //   item.removeEventListener("scroll", removeScrollBackgroundColor);
  // });

  return (
    <div className="box">
      <BoxHeader1 />
      <main className="box__innerBox">
        <BoxHeader2
          allAudioPlayer={allAudioPlayer}
          setDuration={setDuration}
          setCurrentTiming={setCurrentTiming}
        />
        {songData?.map((song) => (
          <section key={song?._id} className="box__data">
            <BoxList
              song={song}
              audioPlayer={audioPlayer}
              setDuration={setDuration}
              setCurrentTiming={setCurrentTiming}
              white={white}
              setWhite={setWhite}
            />
            <BoxRange
              song={song}
              audioPlayer={audioPlayer}
              allAudioPlayer={allAudioPlayer}
              duration={duration}
              currentTiming={currentTiming}
              white={white}
            />
          </section>
        ))}
      </main>
    </div>
  );
}

export default Box;
