import React from "react";
import * as AiIcons from "react-icons/ai";
import ModalComponent from "./ModalComponent";
import Spiner from "./Spinner";
import { Table, Button } from "react-bootstrap";
import {
  valuesToUpdate,
  saveId,
  getTotalPages,
  getContent,
  loading,
} from "../redux/actions";
import { connect } from "react-redux";
import { deleteRequest } from "../utils/Request";
import axios from "axios";

import Swal from "sweetalert2";

const TableComponent = ({ state, setState, ...props }) => {
  const request = async () => {
    props.loading();
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
          props.getTotalPages(dataDb.totalPages);
          props.getContent(dataDb.content);
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
    props.loading();
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
  }, [props.pages]);

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
          {props.loadingState ? (
            <Spiner />
          ) : (
            props.content.map((index) => (
              <tr>
                {mapKeys(index)}
                <td>
                  <Button
                    variant={props.modalData.variantButtom}
                    onClick={() => onClickUpdate(index.id)}
                  >
                    {props.modalData.icon}
                  </Button>
                  {props.loadingState ? (
                    <Spiner />
                  ) : (
                    <ModalComponent
                      modalData={props.modalData}
                      body={props.formData}
                      state={state}
                      setState={setState}
                    />
                  )}

                  <Button
                    variant="danger"
                    onClick={() => onClickDelete(index.id)}
                  >
                    <AiIcons.AiFillDelete />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
    content: state.content,
    pages: state.pages,
    loadingState: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    valuesToUpdate: (payload) => dispatch(valuesToUpdate(payload)),
    saveId: (id) => dispatch(saveId(id)),
    getTotalPages: (payload) => dispatch(getTotalPages(payload)),
    getContent: (payload) => dispatch(getContent(payload)),
    loading: () => dispatch(loading()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
