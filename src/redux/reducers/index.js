import {
  SET_TOKEN,
  SAVE_ID,
  VALUES,
  PAGES,
  TOTAL_PAGES,
  GET_CONTENT,
  LOADING,
  ON_SEARCH,
  USER,
} from "../actions";
const initialState = {
  authToken: null,
  id: null,
  values: [],
  pages: 0,
  totalPages: 1,
  content: [],
  loading: false,
  user: null,
  onSearch: null,
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
      loading: false,
      values: action.payload,
    };
  }
  if (action.type === PAGES) {
    return {
      ...state,
      pages: action.payload,
    };
  }
  if (action.type === TOTAL_PAGES) {
    return {
      ...state,
      totalPages: action.payload,
    };
  }
  if (action.type === GET_CONTENT) {
    return {
      ...state,
      loading: false,
      content: action.payload,
    };
  }
  if (action.type === USER) {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === ON_SEARCH) {
    return {
      ...state,
      onSearch: action.payload,
    };
  }
  if (action.type === LOADING) {
    return {
      ...state,
      loading: true,
    };
  }
  return state;
}
export default rootReducer;
