import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

const TableComponent = (props) => {
  const [content, setContent] = React.useState([]);

  const request = async () => {
    try {
      await axios
        .get(props.tableData.url, {
          headers: {
            "Content-Type": "application/json",
            "auth-token": props.authToken,
          },
        })
        .then(async (obj) => {
          const dataDb = await obj.data;
          setContent(dataDb.content);
        });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    request();
    console.log("content:", content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Table responsive>
        <thead>
          {props.tableData.head.map((index) => (
            <th key={index}>{index.tableHead}</th>
          ))}
        </thead>
        <tbody>
          {content.map((index) => (
            <tr>
              <td>{index.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
  };
}

export default connect(mapStateToProps)(TableComponent);
