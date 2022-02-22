import { SET_TOKEN, HANDLE_SHOW } from "../actions";
const initialState = {
  authToken: null,
  show: false
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_TOKEN) {
    return {
      ...state,
      authToken: action.payload,
    };
  }
  if (action.type === HANDLE_SHOW) {
    return {
      ...state,
      show: action.payload
    }
  }
  return state;
}
export default rootReducer;