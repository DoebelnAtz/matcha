import styled from "styled-components";
import { color } from "../../../Styles";

export const ImageDiv = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
