import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../Components/Form";
import api from "../../../Api";

const Verify = () => {
  const uid = useParams().uid;
  console.log(uid);

  const [formValue, setFormValue] = useState();

  const formConfig = [
    {
      element: "dropdown",
      name: "gender",
      placeholder: "gender",
      values: ["male", "female"],
      required: true,
      autoComplete: false,
    },
    {
      element: "dropdown",
      name: "preference",
      placeholder: "name",
      values: ["male", "female", "both"],
      required: true,
      autoComplete: false,
    },
  ];

  const onSubmit = async () => {
    console.log("submitted");
    await api.post("/auth/signup", {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
      dob: new Date(5),
    });
  };
  return (
    <div>
      {formConfig && (
        <Form
          config={formConfig}
          onSubmit={onSubmit}
          state={formValue}
          setState={setFormValue}
        />
      )}
    </div>
  );
};

export default Verify;
