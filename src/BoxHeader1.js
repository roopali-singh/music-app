import React from "react";
import "./BoxHeader1.css";
import { useStateValue } from "./StateProvider";
// import data from "./data";

import SubjectIcon from "@material-ui/icons/Subject";
import QueueIcon from "@material-ui/icons/Queue";

function BoxHeader1() {
  const [{ songData }, dispatch] = useStateValue();
  // const originalSongData = data?.songs.slice();

  var songsSorted;

  // FOR SONGS NAME AND SONGS SINGER SORTING ///////////////////////////////////////////////////////////////

  //   function defaultSorting() {
  //     console.log("clicked default 🎧 ");
  //     // songsSorted = originalSongData?.sort((a, b) => a);
  //     dispatch({
  //       type: "CHANGE_SONG_DATA",
  //       songData: data?.songs,
  //     });
  //   }

  function nameSorting() {
    songsSorted = songData?.sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log("clicked song name 🎵 ");
    dispatch({
      type: "CHANGE_SONG_DATA",
      songData: songsSorted,
    });
  }

  function singerSorting() {
    songsSorted = songData?.sort((a, b) => (a.singer > b.singer ? 1 : -1));
    console.log("clicked singers 🧑‍🎤 ");
    dispatch({
      type: "CHANGE_SONG_DATA",
      songData: songsSorted,
    });
  }

  return (
    <div className="boxHeader1">
      <div className="dropdown">
        <SubjectIcon className="boxHeader1__icon" />
        <div className="dropdown-content boxHeader1__icon">
          <div className="dropdown__non-select">Sort By</div>
          {/* <div
                className="dropdown__select forDropdown__border-radius"
                onClick={defaultSorting}
              >
                Default
              </div> */}
          <div
            className="dropdown__select forDropdown__border-radius"
            onClick={singerSorting}
          >
            Singers
          </div>
          <div className="dropdown__select" onClick={nameSorting}>
            Songs
          </div>
        </div>
      </div>
      <QueueIcon className="boxHeader1__icon" />
    </div>
  );
}

export default BoxHeader1;
