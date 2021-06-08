import React, { useState } from "react";
import "./SearchBox.css";
import { useStateValue } from "./StateProvider";
import Fuse from "fuse.js";
import data from "./data";

// import { toToggle } from "./headerFunctions";
import SearchIcon from "@material-ui/icons/Search";

function SearchBox() {
  const [{ songData }, dispatch] = useStateValue();
  const [searchBarInput, setSearchBarInput] = useState("");
  const matches = [];

  const options = {
    keys: ["name", "singer"],
    // includeMatches: true,
  };

  // CREATING A NEW FUSE INSTANCE
  const fuse = new Fuse(songData, options);

  // SEARCH OUTPUT
  const searchInput = (input) => {
    if (!input) {
      dispatch({
        type: "CHANGE_SONG_DATA",
        songData: data?.songs,
        // songData: originalSongData,
      });
      return;
    } else {
      const result = fuse.search(input);
      // console.log(result);
      if (!result.length) {
        dispatch({
          type: "CHANGE_SONG_DATA",
          songData: [],
        });
      }
      // else if ((input = "black theme")) {
      //   toToggle();
      // }
      else {
        result.forEach(({ item }) => {
          matches.push(item);
        });
        dispatch({
          type: "CHANGE_SONG_DATA",
          songData: matches,
        });
      }
    }
  };

  return (
    <div className="search">
      <SearchIcon
        className="search__icon"
        onClick={() => searchInput(searchBarInput)}
      />
      <input
        className="search__input"
        placeHolder="Search for Songs or Artists"
        type="search"
        value={searchBarInput}
        onChange={(e) => {
          searchInput(e.target.value);
          setSearchBarInput(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBox;
