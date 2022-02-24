import React from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "react-bootstrap";

import { connect } from "react-redux";

import { postRequest } from "../utils/Request";

const FormComponent = (props) => {
  return (
    <>
      <h3>Formulario</h3>
      <Formik
        initialValues={props.formData.initialValues}
        onSubmit={async (values) => {
          console.log(values);
          await postRequest(props.formData.url, values, props.authToken);
        }}
      >
        <Form>
          {props.formData.fields.map((index) => (
            <>
              <label key={index} htmlFor={index.htmlFor}>{index.label}</label>
              <Field key={index} name={index.name} type={index.type} />
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
  };
}

export default connect(mapStateToProps)(FormComponent);
