const SET_TOKEN = "SET_TOKEN";
const SAVE_ID = "SAVE_ID";
const VALUES = "VALUES";
const PAGES = "PAGES; ";
const TOTAL_PAGES = "TOTAL_PAGES";
const GET_CONTENT = "GET_CONTENT";
const LOADING = "LOADING";

export function setToken(token) {
  return {
    type: SET_TOKEN,
    payload: token,
  };
}

export function getToken(localToken) {
  return function (dispatch) {
    if (localToken) {
      dispatch({ type: SET_TOKEN, payload: localToken });
    } else {
      dispatch({ type: SET_TOKEN, payload: null });
    }
  };
}

export function singOut() {
  return {
    type: SET_TOKEN,
    payload: null,
  };
}

export function saveId(id) {
  return {
    type: SAVE_ID,
    payload: id,
  };
}

export function valuesToUpdate(payload) {
  return {
    type: VALUES,
    payload: payload,
  };
}

export function changePage(payload) {
  return {
    type: PAGES,
    payload: payload,
  };
}

export function getContent(payload) {
  return {
    type: GET_CONTENT,
    payload: payload,
  };
}

export function getTotalPages(payload) {
  return {
    type: TOTAL_PAGES,
    payload: payload,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

export { SET_TOKEN, SAVE_ID, VALUES, PAGES, TOTAL_PAGES, GET_CONTENT, LOADING };
