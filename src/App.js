import React, { useRef } from "react";
import "./App.css";

import { toToggle } from "./headerFunctions";
import Header from "./Header";
import Box from "./Box";
import Footer from "./Footer";

function App() {
  const audioPlayer = useRef(new Audio());
  const allAudioPlayer = useRef(new Audio());

  return (
    <div className="app">
      <span className="toggle" onClick={toToggle}></span>
      <span class="wave"></span>
      <main className="outer__box">
        <Header />
        <Box audioPlayer={audioPlayer} allAudioPlayer={allAudioPlayer} />
        <Footer audioPlayer={audioPlayer} allAudioPlayer={allAudioPlayer} />
      </main>
    </div>
  );
}

export default App;
