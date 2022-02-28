const SET_TOKEN = "SET_TOKEN";
const SAVE_ID = "SAVE_ID";
const VALUES = "VALUES";

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

export { SET_TOKEN, SAVE_ID, VALUES };
