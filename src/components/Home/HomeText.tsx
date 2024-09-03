import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 22%;
  right: 22%;
  transform: translateY(-50%);
`;

const HelloText = styled.span`
  display: block;
  font-size: 2.4vw;
  color: ${colors.yellow};
  line-height: 1.4;
`;
const NameText = styled.span`
  display: block;
  font-family: "Heathergreen";
  font-size: 15.5vw;
  line-height: 0.6;
  color: ${colors.white};
  text-shadow: -2px -2px 0 ${colors.black}, 2px -2px 0 ${colors.black},
    -2px 2px 0 ${colors.black}, 2px 2px 0 ${colors.black};

  @supports ((text-stroke: 3px black) or (-webkit-text-stroke: 3px black)) {
    color: transparent;
    -webkit-text-stroke: 3px ${colors.black};
    text-stroke: 3px ${colors.black};
    text-shadow: none;
  }
`;
const IdentifyText = styled.span`
  display: block;
  font-family: "Heathergreen";
  color: ${colors.yellow};
  font-size: 15.5vw;
  line-height: 1;
`;

export default function HomeText() {
  return (
    <TextContainer>
      <HelloText>Hey, Hi, Hello! I'm</HelloText>
      <NameText>TYLER FIELDS</NameText>
      <IdentifyText>FRONTEND ENGINEER</IdentifyText>
    </TextContainer>
  );
}
