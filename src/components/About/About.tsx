import Stripes from "../Shared/Stripes";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const AboutContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${colors.yellow};
  position: relative;
`;

export default function About() {
  return (
    <AboutContainer id="about">
      <Stripes $width="100%" $color="black" $height="90px" />
    </AboutContainer>
  );
}
