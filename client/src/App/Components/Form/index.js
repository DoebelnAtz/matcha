import React, { useEffect, useState } from "react";
import {
  FormContainer,
  InputGroupDiv,
  LabeledInput,
  LabeledRadioInput,
  LabeledTextarea,
  RadioInput,
  SubmitButton,
} from "./styles";
import DropDownComponent from "../DropDown";

const assembleState = (config) => {
  if (!config) return {};
  let state = {};
  config.forEach((el) => {
    switch (el.element) {
      case "dropdown":
        if (el.value) {
          state[el.name] = { option: el.value, id: -1 };
        } else {
          state[el.name] = {
            option: el.name,
            id: -1,
          };
        }
        break;
      default:
        let temp = {};
        temp = "";
        if (el.value) {
          state[el.name] = el.value;
        } else {
          if (el.confirm) {
            state[`confirm-${el.name}`] = "";
          }
          state[el.name] = temp;
          break;
        }
    }
  });
  return state;
};

const Form = ({ config, onSubmit, state, setState }) => {
  console.log(state);

  useEffect(() => {
    setState(assembleState(config));
  }, [JSON.stringify(config)]);

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
      case "dropdown":
        return (
          <DropDownComponent
            width={"160px"}
            state={state[configElement.name]}
            optionList={configElement.values.map((val, index) => ({
              option: val,
              id: index,
            }))}
            setSelect={(newVal) =>
              setState({ ...state, [configElement.name]: newVal })
            }
          />
        );

      case "textarea":
        return (
          <LabeledTextarea>
            <textarea />
          </LabeledTextarea>
        );
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
