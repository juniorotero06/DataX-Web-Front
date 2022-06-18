import axios from "axios";
import React from "react";
import Sidebar from "../components/SideBar";
import { singOut } from "../redux/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const DashBoard = (props) => {
  let history = useHistory();

  const protectedDates = async () => {
    try {
      await axios
        .get("https://api-atxel.herokuapp.com/api/", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": props.authToken,
          },
        })
        .then(async (obj) => {
          const dataDb = await obj.data;
          console.log(dataDb);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const singOut = () => {
    props.singOut();
    localStorage.removeItem("token2");
    history.push("/");
  };
  React.useEffect(() => {
    if (!localStorage.getItem("token2")) {
      protectedDates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Sidebar />
      <button onClick={singOut}>Cerrar sesion</button>
    </>
  );
};

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    singOut: () => dispatch(singOut()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
