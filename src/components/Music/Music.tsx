import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const MusicContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${colors.yellow};
  position: relative;
`;

export default function Music() {
  return <MusicContainer id="music"></MusicContainer>;
}
