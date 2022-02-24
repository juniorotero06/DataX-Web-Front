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
            alert("Datos Registrados");
          });
      } catch (error) {
        console.log(error);
      } 
  }