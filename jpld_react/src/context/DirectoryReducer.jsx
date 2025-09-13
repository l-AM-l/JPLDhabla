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

    case exampleAction:
      return {
        ...state,
      };

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
          volume: action.payload
        }
      };

    case SET_BRIGHTNESS:
      return {
        ...state,
        settings: {
          ...state.settings,
          brightness: action.payload
        }
      };

    case SET_LETTER_SIZE:
      return {
        ...state,
        settings: {
          ...state.settings,
          letterSize: action.payload
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