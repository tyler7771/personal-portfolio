import Img from "../../assets/images/aboutPortrait.jpg";
import Stripes from "../Shared/Stripes";
import { colors } from "../../assets/cssHelpers";
import styled from "styled-components";

const AboutContainer = styled.section`
  width: 100%;
  background-color: ${colors.yellow};
`;

const InfoContainer = styled.div`
  position: relative;
  width: 85vw;
  margin: 9vw auto 3vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 799px) {
    align-items: unset;
  }
`;

const TextContainer = styled.div`
  width: 60vw;
  height: 18vw;
  padding: 3vw 10vw 3vw 13vw;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: -10%;

  @media (min-width: 1400px) and (max-width: 1919px) {
    padding: 3vw 10vw 3vw 13vw;
  }

  p {
    text-align: justify;
    font-size: 1.34vw;
    color: ${colors.black};
    position: relative;
    line-height: 1.4;
    z-index: 1;
  }

  &:before {
    content: "";
    border: 1px solid ${colors.black};
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
  }

  &:after {
    background: ${colors.orange};
    content: "";
    position: absolute;
    top: 10%;
    right: -3%;
    bottom: -10%;
    left: 3%;
    z-index: 0;
  }

  @media (max-width: 799px) {
    padding: 3vw 4vw 3vw 12vw;
    height: 40vw;

    p {
      font-size: 2.25vw;
    }

    &:after {
      top: 5%;
      bottom: -5%;
    }
  }

  @media (max-width: 500px) {
    padding: 3vw 4vw 3vw 12vw;
    height: 68vw;

    p {
      font-size: 3vw;
    }

    &:after {
      top: 3%;
      bottom: -3%;
    }
  }
`;

const PortraitContainer = styled.div`
  z-index: 2;
`;

const Portrait = styled.div`
  background-image: url(${Img});
  background-size: cover;
  border-radius: 50%;
  width: 24vw;
  height: 24vw;
  position: relative;

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

const SkillsContainer = styled.div`
  width: 70vw;
  display: grid;
  margin: 0 auto;
  padding-left: 7vw;
  grid-template-areas: "header header header" "left center right" "left center right" "left center right";

  @media (max-width: 799px) {
    width: 85vw;
  }

  @media (max-width: 500px) {
    width: 95vw;
  }
`;

const SkillsHeader = styled.div`
  grid-area: header;
  text-align: center;
  font-size: 1.5vw;
  margin-bottom: 16px;

  @media (max-width: 799px) {
    font-size: 2.5vw;
  }

  @media (max-width: 500px) {
    font-size: 3.5vw;
  }
`;

const SkillsRow = styled.div`
  p {
    font-size: 1.5vw;
    font-family: "Inter Bold";
    margin-bottom: 8px;

    @media (max-width: 799px) {
      font-size: 2vw;
    }

    @media (max-width: 500px) {
      font-size: 2.5vw;
    }

    &:nth-child(1) {
      grid-area: left;
    }
    &:nth-child(2) {
      grid-area: center;
    }
    &:nth-child(3) {
      grid-area: right;
    }
  }
`;

export default function About() {
  return (
    <AboutContainer id="about">
      <Stripes $width="100%" $color="black" $height="90px" />
      <InfoContainer>
        <PortraitContainer>
          <Portrait />
        </PortraitContainer>
        <TextContainer>
          <p>
            I’ve always had a passion for creating things and working to make
            people’s lives better. I love frontend engineering because it
            combines my passions for creating and making things that are going
            to make people's lives better or easier. I was born and raised in
            the midwest. I love making and listening to music, riding and
            building fixed gear bikes, and a great cup of coffee (or a cold
            beer).
          </p>
        </TextContainer>
      </InfoContainer>
      <SkillsContainer>
        <SkillsHeader>I have experience working with:</SkillsHeader>
        <SkillsRow>
          <p>REACT</p>
          <p>JAVASCRIPT</p>
          <p>TYPESCRIPT</p>
        </SkillsRow>
        <SkillsRow>
          <p>DESIGN SYSTEMS</p>
          <p>NEXT.JS</p>
          <p>PLAYWRIGHT</p>
        </SkillsRow>
        <SkillsRow>
          <p>STYLED COMPONENTS</p>
          <p>GRAPHQL</p>
          <p>RUBY ON RAILS</p>
        </SkillsRow>
      </SkillsContainer>
    </AboutContainer>
  );
}
