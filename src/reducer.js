import data from "./data";

export const initialState = {
  songData: data?.songs,
  // originalSongData: data?.songs,
  // matches = [],
  source: null,
  allSource: null,
  i: 0,
  f: 0,
  // for throttling
  // rangeInput: 1,
  name: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "p":
      return {
        ...state,
        p: action.p,
      };
    case "CHANGE_SONG_DATA":
      return {
        ...state,
        songData: action.songData,
      };

    case "CHANGE_SONG_SOURCE":
      return {
        ...state,
        source: action.source,
      };

    case "CHANGE_ALL_SONG_SOURCE":
      return {
        ...state,
        allSource: action.allSource,
      };

    case "CHANGE_SONG_NAME":
      return {
        ...state,
        name: action.name,
      };

    case "SET_I":
      return {
        ...state,
        i: action.i,
      };

    case "SET_F":
      return {
        ...state,
        f: action.f,
      };

    case "CHANGE_RANGE_INPUT":
      return {
        ...state,
        rangeInput: action.rangeInput,
      };

    default:
      return state;
  }
};

export default reducer;
