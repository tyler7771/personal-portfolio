import ChatCircle from "../../assets/images/ChatCircle.svg";
import { ReactComponent as Curve } from "../../assets/images/Curve.svg";
import HomeText from "./HomeText";
import Portrait from "../../assets/images/Portrait.png";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const PortraitContainer = styled.section`
  margin-top: 9.65vw;
  height: calc(100vh - 9.65vw);
  width: 100%;
  position: relative;
  background-color: ${colors.white};

  @media (max-width: 932px) {
    margin-top: 90px;
    height: calc(100vh - 90px);
  }
`;

const StyledPortait = styled.img`
  filter: brightness(200%);
  max-height: calc(100% - 98px);
  align-self: flex-end;
  position: absolute;
  bottom: 0;
  right: 22%;

  @media (max-width: 1199px) {
    right: 10%;
  }

  @media (max-width: 799px) {
    left: 5%;
  }

  @media (max-width: 799px) {
    left: -10%;
  }
`;

const Button = styled.a`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 15.75%;
  height: 6.5%;
  border: none;
  background-color: ${colors.yellow};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 30px;
  color: ${colors.white};
  text-decoration: none;

  &:hover {
    filter: brightness(95%);
  }

  &:after {
    content: url(${ChatCircle});
    position: absolute;
    width: 110%;
    left: -0.5vw;
  }

  @media (min-width: 1200px) and (max-width: 1300px) {
    font-size: 25px;
  }

  @media (max-width: 1199px) {
    font-size: 23px;
    width: 24%;
  }

  @media (max-width: 799px) {
    width: 30%;
  }

  @media (max-width: 499px) {
    width: 50%;
  }
`;

const StyledCurve = styled(Curve)`
  position: absolute;
  bottom: -15px;

  @media (max-width: 1199px) {
    bottom: -5px;
  }

  @media (max-width: 800px) {
    bottom: 0;
  }
`;

export default function Header() {
  return (
    <PortraitContainer>
      <StyledPortait src={Portrait} />
      <HomeText />
      <Button href="#footer">LET'S CHAT!</Button>
      <StyledCurve />
    </PortraitContainer>
  );
}
