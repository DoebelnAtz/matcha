import styled from "styled-components";
import { color, components, layout } from "../../../Styles";

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SignUpEmail = styled.label`
  ${components.labeledInput};
  ${layout.centered};
`;

export const SignUpPassword = styled.label`
  ${components.labeledInput};
  ${layout.centered};
`;

export const SignUpPasswordConfirmation = styled.label`
  ${components.labeledInput};
  ${layout.centered};
`;

export const SubmitButton = styled.button`
  ${components.button};
  width: fit-content;
  ${layout.centered};
`;
