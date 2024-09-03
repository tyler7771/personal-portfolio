import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const EducationContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${colors.yellow};
  position: relative;
`;

export default function Education() {
  return <EducationContainer id="education"></EducationContainer>;
}
