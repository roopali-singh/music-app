import React from "react";
import "./BoxRange.css";

import { hms } from "./headerFunctions";

function BoxRange({
  song,
  audioPlayer,
  allAudioPlayer,
  duration,
  currentTiming,
  white,
}) {
  // FOR THE INPUT RANGE BAR ///////////////////////////////////////////////////////////////

  function toSetRangeInput(range) {
    // dispatch({
    //   type: "CHANGE_RANGE_INPUT",
    //   rangeInput: range,
    // });
    audioPlayer.current.currentTime = range;
    allAudioPlayer.current.currentTime = range;
  }

  return (
    <div className="boxRange">
      {white === song?._id && (
        <main className="boxRange__rangeBar">
          <input
            className="range__input"
            type="range"
            min="0"
            max={duration}
            // step="0.25"
            value={currentTiming}
            onChange={(e) => toSetRangeInput(e.target.value)}
          />
          <section className="boxRange__rangeBar-timimg">
            <span>{hms(currentTiming)}</span>
            <span>{hms(duration)}</span>
          </section>
        </main>
      )}
    </div>
  );
}

export default BoxRange;
