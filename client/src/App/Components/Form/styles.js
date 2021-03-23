import styled from "styled-components";
import { color, components, layout, units } from "../../../Styles";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const InputGroupDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${units.mm};
`;

export const LabeledInput = styled.label`
  ${components.labeledInput};
  ${layout.centered};
`;

export const LabeledTextarea = styled.label`
  ${components.labeledTextArea};
  ${layout.centered};
`;

export const LabeledRadioInput = styled.label`
  ${components.labeledRadioInput};
`;

export const SubmitButton = styled.button`
  ${components.button};
  ${layout.centered};
`;
