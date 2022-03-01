import React from "react";
import { Table, Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import { valuesToUpdate, saveId } from "../redux/actions";
import { connect } from "react-redux";
import { deleteRequest } from "../utils/Request";
import axios from "axios";

import Swal from "sweetalert2";

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
        props.valuesToUpdate(dataDb);
      })
      .catch((error) => console.log(error));

    setState(!state);
    props.saveId(String(id));
  };

  const onClickDelete = async (id) => {
    const url = props.formUpdateData.url + String(id);
    Swal.fire({
      title: "¿Estas seguro que desear borrar el registro?",
      text: "Esta accion no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#a5a5a5",
      confirmButtonText: "Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteRequest(url, props.authToken);
        window.location.reload();
        Swal.fire(
          "¡Borrado!",
          "Se ha borrado el registro satisfactoriamente.",
          "success"
        );
      }
    });
  };

  React.useLayoutEffect(() => {
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
                <Button
                  variant="danger"
                  onClick={() => onClickDelete(index.id)}
                >
                  Borrar
                </Button>
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
    saveId: (id) => dispatch(saveId(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
