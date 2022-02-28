import { SET_TOKEN, SAVE_ID, VALUES } from "../actions";
const initialState = {
  authToken: null,
  id: "",
  values: null,
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
  if (action.type === VALUES) {
    return {
      ...state,
      values: action.payload,
    };
  }
  return state;
}
export default rootReducer;
