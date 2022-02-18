import React from "react";
import axios from "axios";
import { connect } from "react-redux";

const UsersTable = (props) => {
  const [users, setUsers] = React.useState([]);
  const getUsers = async () => {
    try {
      await axios
        .get("http://localhost:3001/api/users?page=0&size=2", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": props.authToken,
          },
        })
        .then(async (obj) => {
          const dataDb = await obj.data;
          setUsers(dataDb.content);
        });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(users)}</span>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    authToken: state.authToken,
  };
}

export default connect(mapStateToProps)(UsersTable);
