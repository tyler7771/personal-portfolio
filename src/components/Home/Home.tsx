import { ReactComponent as Curve } from "../../assets/images/Curve.svg";
import HomeText from "./HomeText";
import Portrait from "../../assets/images/Portrait.png";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const PortraitContainer = styled.section`
  margin-top: 185px;
  height: calc(100vh - 185px);
  width: 100%;
  position: relative;
  background-color: ${colors.white};
`;

const StyledPortait = styled.img`
  filter: brightness(200%);
  max-height: calc(100% - 98px);
  align-self: flex-end;
  position: absolute;
  bottom: 0;
  right: 22%;
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
`;

const text = styled.span``;

const StyledCurve = styled(Curve)`
  position: absolute;
  bottom: -15px;
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
