import React from "react";
import { Table, Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import { valuesToUpdate } from "../redux/actions";
import { connect } from "react-redux";
import axios from "axios";

const TableComponent = ({ state, setState, ...props }) => {
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
    });
  };

  const onClickUpdate = async (id) => {
    const url = props.formUpdateData.url + String(id);
    await axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": props.authToken,
        },
      })
      .then(async (obj) => {
        const dataDb = await obj.data;
        console.log("dataDb", dataDb);
        props.valuesToUpdate(dataDb);
      })
      .catch((error) => console.log(error));

    setState(!state);
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
              <td>
                <Button
                  variant={props.modalData.variantButtom}
                  onClick={() => onClickUpdate(index.id)}
                >
                  {props.modalData.title}
                </Button>
                <ModalComponent
                  modalData={props.modalData}
                  body={props.formData}
                  state={state}
                  setState={setState}
                />
                <Button variant="danger">Borrar</Button>
              </td>
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

function mapDispatchToProps(dispatch) {
  return {
    valuesToUpdate: (payload) => dispatch(valuesToUpdate(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
