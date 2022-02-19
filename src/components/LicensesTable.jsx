import React from "react";
import axios from "axios";
import { connect } from "react-redux";

const LicensesTable = (props) => {
  const [licenses, setLicenses] = React.useState([]);
  const getLicenses = async () => {
    try {
      await axios
        .get("http://localhost:3001/api/licenses?page=0&size=2", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": props.authToken,
          },
        })
        .then(async (obj) => {
          const dataDb = await obj.data;
          setLicenses(dataDb.content);
        });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getLicenses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <span>{JSON.stringify(licenses)}</span>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    authToken: state.authToken,
  };
}

export default connect(mapStateToProps)(LicensesTable);