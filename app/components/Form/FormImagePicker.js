import "./../../../firebase";
import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const FormImagePicker = ({ name, setLoading }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const uris = values[name];

  const handleAdd = async (uri) => {
    setLoading(true);
    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      const filename = uri.substring(uri.lastIndexOf("/") + 1);

      // var ref = firebase.ref().child(filename).put(blob);
      const storageRef = ref(storage, filename);

      const snapshot = await uploadBytes(storageRef, blob);

      const url = await getDownloadURL(snapshot.ref);

      setFieldValue(name, [url]);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = (uri) =>
    setFieldValue(
      name,
      uris.filter((imageUri) => imageUri !== uri)
    );

  return (
    <>
      <ImageInputList
        onImageAdd={handleAdd}
        onImageRemove={handleRemove}
        uris={uris}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
