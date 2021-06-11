import data from "./data";

export const initialState = {
  songData: data?.songs,
  originalSongData: data?.songs,
  // matches = [],
  source: null,
  allSource: null,
  i: 0,
  f: 0,
  // for throttling
  // rangeInput: 1,
  name: "",
  // for adding favourites
  favourite: [],
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

    case "FAVOURITE_LIST":
      // to check if the song is not already present in favourites

      const song = state.favourite.find(
        (songId) => songId._id === action.item._id
      );

      let newSong = [...state.favourite];

      if (!song) {
        // song not present => add that song
        newSong = [...state.favourite, action.item];
      } else if (song) {
        // song present => remove that song
        newSong = state.favourite.filter(
          (songPresent) => songPresent._id !== song._id
        );
      } else {
        // in case of error :\
        document.location.reload();
      }

      return {
        ...state,
        favourite: newSong,
      };

    default:
      return state;
  }
};

export default reducer;
