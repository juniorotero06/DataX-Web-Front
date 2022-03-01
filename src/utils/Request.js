import axios from "axios";

export async function postRequest(url, options, token) {
  try {
    await axios
      .post(url, options, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      })
      .then(() => {
        console.log("Datos Registrados");
      });
  } catch (error) {
    console.log(error);
  }
}

export async function getByIdFunction(url, id, token) {
  try {
    await axios
      .get(url + id, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      })
      .then((obj) => {
        return obj.data;
      });
  } catch (error) {
    console.log(error);
  }
}

export async function updateRequest(url, options, token) {
  try {
    await axios.put(url, options, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteRequest(url, token) {
  try {
    await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
