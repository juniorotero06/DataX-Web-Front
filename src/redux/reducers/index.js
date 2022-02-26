import { SET_TOKEN, SAVE_ID } from "../actions";
const initialState = {
  authToken: null,
  id: "",
};

function rootReducer(state = initialState, action) {
  if (action.type === SET_TOKEN) {
    return {
      ...state,
      authToken: action.payload,
    };
  }
  if (action.type === SAVE_ID) {
    return {
      ...state,
      id: action.payload,
    };
  }
  return state;
}
export default rootReducer;
