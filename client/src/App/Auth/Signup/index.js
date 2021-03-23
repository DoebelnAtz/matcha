import React, { useState } from "react";
import {
  SignUpDiv,
  SignUpEmail,
  SignUpForm,
  SignUpPassword,
  SignUpPasswordConfirmation,
  SubmitButton,
} from "./styles";
import api from "../../../Api";
import { useInput } from "../../../Hooks";
import Form from "../../Components/Form";

const SignUp = () => {
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
      type: "text",
      name: "name",
      placeholder: "name",
      required: true,
      autoComplete: false,
    },
    {
      element: "input",
      type: "password",
      name: "password",
      placeholder: "password",
      required: true,
      confirm: true,
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
    <SignUpDiv>
      {formConfig && (
        <Form
          config={formConfig}
          onSubmit={onSubmit}
          state={formValue}
          setState={setFormValue}
        />
      )}
    </SignUpDiv>
  );
};

export default SignUp;
