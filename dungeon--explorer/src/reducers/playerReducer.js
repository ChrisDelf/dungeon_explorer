import { types } from '../actions/index'

const {
  GEN_MAP_START,
  GEN_MAP_SUCCESS,
  GEN_MAP_FAILURE,
  GET_MAPS_START,
  GET_MAPS_SUCCESS,
  GET_MAPS_FAILURE,
  SELECT_MAP_SUCCESS,
  SELECT_MAP_START,
  SELECT_MAP_FAILURE,
 
} = types;


const initState = {
 selectedMap: '',
 selectedGrid: [],
  maps: [],
  monsters:[],
  players:[],
  grid:[],
  playerLoading: false,
  playerId: '',
}


const playerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MAPS_START:
      return {
        ...state, error: '',
        playerLoading: true
      }

    case GET_MAPS_SUCCESS:
      return {
        ...state,
        error: '',
        maps: payload,
        playerLoading: false
      }

    case GET_MAPS_FAILURE:
      return {
        ...state,
        error: payload,
        playerLoading: false
      }


    case GEN_MAP_START:
      return {
        ...state,
        error: ' ',
        playerLoading: true,
      }

    case GEN_MAP_SUCCESS:
      return {
        ...state,
        error: '',
        selectedMap: payload,
        playerLoading: false,
      }

    case GEN_MAP_FAILURE:
      return {
        ...state,
        error: payload,
        playerLoading: false,
      }
    case SELECT_MAP_START:
      return {
        ...state,
        error: '',
        authLoading: true,
      }
    case SELECT_MAP_SUCCESS:
      return {
        ...state,
        error: '',
        grid: JSON.parse(payload.grid),
        players: payload.players,
        monsters: payload.monsters,
        authLoading: false,
      }
    case SELECT_MAP_FAILURE:
      return {
        ...state,
        error: payload,
        authLoading: false
      }

    default:
      return state;
  }
}





export default playerReducer;
