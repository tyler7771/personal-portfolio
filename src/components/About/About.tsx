import Img from "../../assets/images/aboutPortrait.jpg";
import Stripes from "../Shared/Stripes";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const AboutContainer = styled.section`
  width: 100%;
  height: 1000px;
  background-color: ${colors.yellow};
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 21vh;
  right: 9.15vw;
  background: ${colors.orange};
  width: 59vw;
  padding: 1vh 23vh 5vh;

  p {
    font-family: "Inter Bold";
    text-align: justify;
    font-size: 25px;
    color: ${colors.black};
  }

  &:after {
    content: "";
    border: 1px solid ${colors.black};
    display: block;
    width: 59vw;
    left: -30px;
    position: absolute;
    bottom: 30px;
    top: -30px;
    z-index: 1;
  }
`;

const PortraitContainer = styled.div`
  position: absolute;
  top: 16vh;
  left: 18vw;
  z-index: 2;
`;

const Portrait = styled.div`
  background-image: url(${Img});
  background-size: cover;
  border-radius: 50%;
  width: 24vw;
  height: 24vw;

  &:before {
    content: "";
    border: 1px solid ${colors.black};
    display: block;
    border-radius: 50%;
    width: 24vw;
    height: 24vw;
    position: absolute;
    top: -1vh;
    left: -4vw;
    z-index: 1;
  }

  &:after {
    content: "";
    border-radius: 50%;
    display: block;
    background: ${colors.orange};
    width: 24vw;
    height: 24vw;
    position: absolute;
    top: 2vh;
    left: -2vw;
    z-index: -1;
  }
`;

export default function About() {
  return (
    <AboutContainer id="about">
      <Stripes $width="100%" $color="black" $height="90px" />
      <PortraitContainer>
        <Portrait />
      </PortraitContainer>
      <TextContainer>
        <p>
          I’ve always had a passion for creating things and working to make
          people’s lives better. I love frontend engineering because it combines
          my passions for creating and making things that are going to make
          people's lives better or easier. I was born and raised in the midwest.
          I love making and listening to music, riding and building fixed gear
          bikes, and a great cup of coffee (or a cold beer).
        </p>
      </TextContainer>
    </AboutContainer>
  );
}
