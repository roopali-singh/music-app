import React, { useState, useEffect } from "react";
import "./BoxHeader1.css";
import { useStateValue } from "./StateProvider";
// import data from "./data";

import SubjectIcon from "@material-ui/icons/Subject";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function BoxHeader1() {
  const [{ songData, originalSongData, favourite }, dispatch] = useStateValue();
  const [toggleState, setToggleState] = useState(false);
  // const originalSongData = data?.songs.slice();

  var songsSorted;

  // TO TOGGLE BETWEEN FAVOURITES AND ALL SONGS //////////////////////////////////////////////

  useEffect(() => {
    // TO SHOW THE FAVOURITES ///////////////////////////////////////////////////////////////

    if (toggleState) {
      dispatch({
        type: "CHANGE_SONG_DATA",
        songData: favourite,
      });
    } else {
      dispatch({
        type: "CHANGE_SONG_DATA",
        songData: originalSongData,
      });
    }
  }, [toggleState]);

  function favouriteToggle() {
    setToggleState((toggleState) => !toggleState);
  }

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
    // console.log("clicked song name 🎵 ");
    dispatch({
      type: "CHANGE_SONG_DATA",
      songData: songsSorted,
    });
  }

  function singerSorting() {
    songsSorted = songData?.sort((a, b) => (a.singer > b.singer ? 1 : -1));
    // console.log("clicked singers 🧑‍🎤 ");
    dispatch({
      type: "CHANGE_SONG_DATA",
      songData: songsSorted,
    });
  }

  return (
    <div className="boxHeader1">
      <main className="dropdown">
        <SubjectIcon className="boxHeader1__icon" />
        <section className="dropdown-content boxHeader1__icon">
          <header className="dropdown__non-select">Sort By</header>
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
        </section>
      </main>
      {!toggleState ? (
        <LibraryMusicIcon
          className="boxHeader1__icon"
          onClick={favouriteToggle}
        />
      ) : (
        <ArrowBackIcon
          className="boxHeader1__icon"
          onClick={() => {
            favouriteToggle();
            // showFavourites();
          }}
        />
      )}
    </div>
  );
}

export default BoxHeader1;
