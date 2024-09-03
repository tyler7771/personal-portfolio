import Stripes from "../Shared/Stripes";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const EducationContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${colors.white};
  position: relative;
`;

export default function Education() {
  return (
    <EducationContainer id="education">
      <Stripes $width="100%" $color="yellow" $height="90px" />
    </EducationContainer>
  );
}
