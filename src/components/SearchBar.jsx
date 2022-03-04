import React from "react";
import { connect } from "react-redux";
import { onSearch, getContent, loading, getTotalPages } from "../redux/actions";
import { Formik, Field, Form } from "formik";
import { Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

export function SearchBar(props) {
  const onClickSearch = async (values) => {
    props.loading();
    await props.onSearch(values);
    await axios
      .get(props.tableSearch.url, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": props.authToken,
        },
      })
      .then(async (obj) => {
        const dataDb = await obj.data;
        console.log("dataDb: ", dataDb);
        if (dataDb.content.length > 0) {
          props.getContent(dataDb.content);
        } else {
          Swal.fire(
            "Esta informacion no se encuentra registrada en la Base de datos"
          );
        }
      })
      .catch((error) => console.log(error));
  };

  const onClickDelete = async () => {
    props.loading();
    try {
      await axios
        .get(props.tableSearch.basicUrl, {
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

  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={async (values) => {
          onClickSearch(values);
        }}
      >
        <Form>
          <Field name="search" type="text" />
          <Button variant="primary" type="submit">
            <AiIcons.AiOutlineSearch />
          </Button>
          <Button variant="danger" onClick={onClickDelete}>
            <AiIcons.AiFillDelete />
          </Button>
        </Form>
      </Formik>
    </>
  );
}

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (payload) => dispatch(onSearch(payload)),
    getContent: (payload) => dispatch(getContent(payload)),
    getTotalPages: (payload) => dispatch(getTotalPages(payload)),
    loading: () => dispatch(loading()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
