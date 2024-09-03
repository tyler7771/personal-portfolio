import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const SocialsContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${colors.yellow};
  position: relative;
`;

export default function Socials() {
  return <SocialsContainer id="socials"></SocialsContainer>;
}
