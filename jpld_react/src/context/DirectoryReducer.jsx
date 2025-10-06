/*
 * © 2025 [Rodrigo López Gómez, Ramón Alejandro Briseño Martínez, Nahui Metztli Dado Delgadillo, Ana Mariem Pérez Chacón, Karla Avila Navarro, Ana María Guzman Solís]
 * Licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
 * 
 * You must give appropriate credit to all contributors whenever you use or modify this file.
 * Commercial use or redistribution without permission is prohibited.
 * 
 * Full license text: https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
 */

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


function DirectoryReducer(state, action) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,  // e.g., user info returned from login
      };

    case SET_VOLUME:
        return {
            ...state,
            settings: {
            ...state.settings,
            volume: Number(action.payload.toFixed(3))
            }
        };

    case SET_BRIGHTNESS:
        return {
            ...state,
            settings: {
            ...state.settings,
            brightness: Number(action.payload.toFixed(3))
            }
        };

    case SET_LETTER_SIZE:
        return {
            ...state,
            settings: {
            ...state.settings,
            letterSize: Number(action.payload.toFixed(3))
            }
        };

    case SET_LEVEL:
      return {
        ...state,
        level: action.payload,  // current game level
      };

    case SET_DIFF:
      return {
        ...state,
        difficulty: action.payload,  // e.g., 'easy', 'medium', 'hard'
      };

    case SET_SCENE:
      return {
        ...state,
        scene: action.payload,  // current scene or overlay
      };

    case SET_PLAYERS:
      return {
        ...state,
        players: action.payload,  // array or number of players
      };

    default:
      throw new Error(`Unsupported action ${action.type}`);
  }
}

export default DirectoryReducer;