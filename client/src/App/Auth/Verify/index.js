import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../Components/Form";
import api from "../../../Api";
import { useGet } from "../../../Hooks";

const Verify = () => {
  const uid = useParams().uid;
  console.log(uid);

  const [formValue, setFormValue] = useState();
  const [user, setUser] = useGet("/users/me");
  console.log(user);
  const formConfig = [
    {
      element: "dropdown",
      name: "gender",
      placeholder: "gender",
      values: ["male", "female"],
      required: true,
      autoComplete: false,
      value: user?.gender,
    },
    {
      element: "dropdown",
      name: "preference",
      placeholder: "name",
      values: ["male", "female", "both"],
      required: true,
      autoComplete: false,
      value: user?.preference,
    },
    {
      element: "input",
      name: "profile-pic",
      placeholder: "profile picture url",
      type: "text",
      required: true,
      autoComplete: false,
      value: user?.pictures,
    },
    {
      element: "input",
      type: "email",
      name: "email",
      placeholder: "email",
      required: true,
      autoComplete: false,
      value: user?.email,
    },
    {
      element: "input",
      type: "text",
      name: "name",
      placeholder: "name",
      required: true,
      autoComplete: false,
      value: user?.name,
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
