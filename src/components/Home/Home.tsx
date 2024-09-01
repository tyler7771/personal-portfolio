import { ReactComponent as ButtonCircle } from "../../assets/images/ButtonCircle.svg";
import HomeText from "./HomeText";
import Portrait from "../../assets/images/Portrait.png";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const PortraitContainer = styled.div`
  height: calc(100vh - 185px);
  width: 100%;
  position: relative;
`;

const StyledPortait = styled.img`
  filter: brightness(200%);
  max-height: calc(100% - 98px);
  align-self: flex-end;
  position: absolute;
  bottom: 0;
  right: 22%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 15.75%;
  height: 6.5%;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${colors.yellow};
  border-radius: 50px;
  font-size: 30px;
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }
`;

export default function Header() {
  return (
    <PortraitContainer>
      <StyledPortait src={Portrait} />
      <HomeText />
      <ButtonContainer>
        <Button>LET'S CHAT!</Button>
      </ButtonContainer>
    </PortraitContainer>
  );
}
