import React from "react";
import "./Header.css";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="header__heading">
          Music App{" "}
          <HeadsetMicIcon
            style={{ fontSize: 40 }}
            className="header__heading-icon"
          />
        </h1>
      </div>
      <SearchBox />
    </header>
  );
}

export default Header;
