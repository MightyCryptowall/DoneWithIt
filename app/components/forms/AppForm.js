import { Formik } from "formik";
import React from "react";
import { View } from "react-native";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>{children}</View>}
    </Formik>
  );
}

export default AppForm;
