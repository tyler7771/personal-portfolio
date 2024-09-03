import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const AboutContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${colors.yellow};
  position: relative;
`;

const Stripes = styled.div`
  height: 90px;
  width: 100%;
  background-image: linear-gradient(
    -45deg,
    transparent 25%,
    ${colors.black} 25%,
    ${colors.black} 50%,
    transparent 50%,
    transparent 75%,
    ${colors.black} 75%,
    ${colors.black}
  );
  background-size: 96px 96px;
  position: relative;
`;

export default function Header() {
  return (
    <AboutContainer id="about">
      <Stripes />
    </AboutContainer>
  );
}
