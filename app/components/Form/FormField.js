import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ icon, name, placeholder, width, ...otherProps }) => {
  const { errors, handleChange, setFieldTouched, touched, initialValues } =
    useFormikContext();

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        icon={icon}
        placeholder={placeholder}
        width={width}
        defaultValue={initialValues[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
