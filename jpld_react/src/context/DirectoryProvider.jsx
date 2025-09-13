import React, { createContext, useContext, useReducer } from 'react';
import DirectoryReducer from './DirectoryReducer';
import { 
  SET_VOLUME, 
  SET_BRIGHTNESS, 
  SET_LETTER_SIZE, 
  SET_LEVEL, 
  SET_DIFF, 
  SET_SCENE, 
  SET_PLAYERS, 
  LOGIN 
} from './actions';

import api from '../api/api';

const DirectoryContext = createContext();

function DirectoryProvider({ children }) {
    
    const initialState = {
        settings: {volume:0.5, brightness: 0.5, letterSize: 0.5},
        scene: 0,
        level: 1,
        difficulty: 1,
        players: 1,

    };
    const [state, dispatch] = useReducer(DirectoryReducer, initialState);

    return (
        <DirectoryContext.Provider value={{ state, dispatch }}>
            {children}
        </DirectoryContext.Provider>
    );
}

function appContext(){
    return useContext(DirectoryContext);
}

async function logIn(){
    try{
        await api.post('/logIn');

    }catch(error){
        console.error("Error Login In" , error );
    }
}

// Settings functions
export async function setVolume(dispatch, volume) {
  try {
    dispatch({ type: SET_VOLUME, payload: volume });
  } catch (error) {
    console.error("Error Setting Volume:", error);
  }
}

export async function setBrightness(dispatch, brightness) {
  try {
    dispatch({ type: SET_BRIGHTNESS, payload: brightness });
  } catch (error) {
    console.error("Error Setting Brightness:", error);
  }
}

export async function setLetterSize(dispatch, letterSize) {
  try {
    dispatch({ type: SET_LETTER_SIZE, payload: letterSize });
  } catch (error) {
    console.error("Error Setting Letter Size:", error);
  }
}

// Top-level state functions
export async function setLevel(dispatch, level) {
  try {
    dispatch({ type: SET_LEVEL, payload: level });
  } catch (error) {
    console.error("Error Setting Level:", error);
  }
}

export async function setDifficulty(dispatch, difficulty) {
  try {
    dispatch({ type: SET_DIFF, payload: difficulty });
  } catch (error) {
    console.error("Error Setting Difficulty:", error);
  }
}

export async function setScene(dispatch, scene) {
  try {
    dispatch({ type: SET_SCENE, payload: scene });
  } catch (error) {
    console.error("Error Setting Scene:", error);
  }
}

export async function setPlayers(dispatch, players) {
  try {
    dispatch({ type: SET_PLAYERS, payload: players });
  } catch (error) {
    console.error("Error Setting Players:", error);
  }
}


export default DirectoryProvider;

export {
  setVolume,
  setBrightness,
  setLetterSize,
  setLevel,
  setDifficulty,
  setScene,
  setPlayers,
  logIn
};
