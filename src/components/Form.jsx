import React from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const FormComponent = (props) => {
//   const url = props.formData.url;
//   const reqBody = props.formData.reqBody;
  const createSubmit = async (params) => {
    // try {
    //   await axios.post(url, reqBody, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth-token": props.authToken,
    //     },
    //   });
    // } catch (error) {
    //   alert(error);
    // }
  };
  return (
    <>
      <h3>Formulario</h3>
      <Formik
        initialValues={props.formData.initialValues}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values.email, null, 2));
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
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default FormComponent;
