import React from "react";
import FormComponent from "./Form";

const ModificationForm = (props) => {
  return (
    <>
      <FormComponent formData={props.formData} />
    </>
  );
};

export default ModificationForm;
