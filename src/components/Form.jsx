import React from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "react-bootstrap";

import { saveId } from "../redux/actions";
import { connect } from "react-redux";

import {
  postRequest,
  updateRequest,
  getByIdFunction,
  deleteRequest,
} from "../utils/Request";

const FormComponent = (props) => {
  const handleSubmit = async (values) => {
    switch (props.formData.action) {
      case "create":
        await postRequest(props.formData.url, values, props.authToken);
        break;
      case "get":
        await props.saveId(values);
        await getByIdFunction(props.formData.url, values, props.authToken);
        break;
      case "update":
        await updateRequest(
          props.formData.url,
          props.id,
          values,
          props.authToken
        );
        break;
      case "delete":
        await props.saveId(values);
        await deleteRequest(props.formData.url, props.id, props.authToken);
        break;
      default:
        console.log("handleSubmit: ", values);
        break;
    }
  };
  return (
    <>
      <h3>Formulario</h3>
      <Formik
        initialValues={props.formData.initialValues}
        onSubmit={async (values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        <Form>
          {props.formData.fields.map((index) => (
            <>
              <label htmlFor={index.htmlFor}>{index.label}</label>
              <Field name={index.name} type={index.type} />
              <p>&nbsp;</p>
            </>
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </>
  );
};

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
    id: state.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveId: (id) => dispatch(saveId(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
