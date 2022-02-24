const SET_TOKEN = "SET_TOKEN";
const HANDLE_SHOW = "HANDLE_SHOW";

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

export function handleShowModal(bool) {
  return {
    type: HANDLE_SHOW,
    payload: bool,
  };
}

export { SET_TOKEN, HANDLE_SHOW };
