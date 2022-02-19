import React from "react";
import axios from "axios";
import { connect } from "react-redux";

const PivotTable = (props) => {
  const [pivot, setPivot] = React.useState([]);
  const getPivotTable = async () => {
    try {
      await axios
        .get("http://localhost:3001/api/pivot?page=0&size=2", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": props.authToken,
          },
        })
        .then(async (obj) => {
          const dataDb = await obj.data;
          setPivot(dataDb.content);
        });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getPivotTable();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <span>{JSON.stringify(pivot)}</span>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    authToken: state.authToken,
  };
}

export default connect(mapStateToProps)(PivotTable);