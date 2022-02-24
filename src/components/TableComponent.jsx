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

  const mapKeys = (object) => {
    let response = [];
    for (let i in object) {
      response.push(object[i]);
    }
    return response.map((i) => {
        return <td>{String(i)}</td>;
    })
  };

  React.useEffect(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            {props.tableData.head.map((index) => (
              <th>{index.tableHead}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {content.map((index) => (
            <tr>
              {mapKeys(index)}
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
