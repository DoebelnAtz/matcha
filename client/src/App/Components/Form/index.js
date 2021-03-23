import React, { useEffect, useState } from "react";
import {
  FormContainer,
  InputGroupDiv,
  LabeledInput,
  SubmitButton,
} from "./styles";

const assembleState = (config) => {
  if (!config) return {};
  let state = {};
  config.forEach((el) => {
    let temp = {};
    temp = "";
    if (el.confirm) {
      state[`confirm-${el.name}`] = "";
    }
    state[el.name] = temp;
  });
  return state;
};

const Form = ({ config, onSubmit, state, setState }) => {
  console.log(state);

  useEffect(() => {
    setState(assembleState(config));
  }, []);

  const handleChange = (name, e) => {
    let newVal = e.target.value;
    let temp = {};
    temp[name] = newVal;
    setState({ ...state, ...temp });
  };

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await onSubmit();
  };

  const renderElement = (configElement) => {
    switch (configElement.element) {
      default:
        return (
          <>
            <LabeledInput>
              {configElement.name}
              <input
                placeholder={configElement.placeholder}
                type={configElement.type}
                name={configElement.name}
                onChange={(e) => handleChange(configElement.name, e)}
                value={state[configElement.name]}
                autoComplete={
                  configElement.autoComplete ? "on" : "new-password"
                }
              />
            </LabeledInput>
            {configElement.confirm && (
              <LabeledInput>
                {`Confirm ${configElement.name}`}
                <input
                  name={`conform-${configElement.name}`}
                  type={configElement.type}
                  onChange={(e) =>
                    handleChange(`confirm-${configElement.name}`, e)
                  }
                  value={state[`confirm-${configElement.name}`]}
                  placeholder={configElement.placeholder}
                  autoComplete={
                    configElement.autoComplete ? "on" : "new-password"
                  }
                />
              </LabeledInput>
            )}
          </>
        );
    }
  };
  const renderForm = () => {
    return config.map((el, index) => {
      return <InputGroupDiv key={index}>{renderElement(el)}</InputGroupDiv>;
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {state && renderForm()}
      <SubmitButton type={"submit"}>Submit</SubmitButton>
    </FormContainer>
  );
};

export default Form;
