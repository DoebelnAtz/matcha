import React, { useState } from "react";
import Form from "../../Components/Form";
import api from "../../../Api";

const LogIn = () => {
  const [formValue, setFormValue] = useState();

  const formConfig = [
    {
      element: "input",
      type: "email",
      name: "email",
      placeholder: "email",
      required: true,
      autoComplete: false,
    },
    {
      element: "input",
      type: "password",
      name: "password",
      placeholder: "password",
      required: true,
      autoComplete: false,
    },
  ];
  const onSubmit = async () => {
    console.log("submitted");
    let resp = await api.post("/auth/login", {
      email: formValue.email,
      password: formValue.password,
    });
    console.log(resp);
  };
  return (
    <div>
      <Form
        config={formConfig}
        onSubmit={onSubmit}
        state={formValue}
        setState={setFormValue}
      />
    </div>
  );
};

export default LogIn;
