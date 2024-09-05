import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import styled, { keyframes } from "styled-components";

import Bike from "../../assets/images/Bike.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../assets/cssHelpers";

const SocialsContainer = styled.section`
  width: 100%;
  height: 18vw;
  background-color: ${colors.white};
  position: relative;
`;

const bikeScroll = keyframes`
  from {
    margin-left: -370px;
  }
  to {
    margin-left: 0;
  }
  `;

const Img = styled.img`
  height: 18vw;
  position: absolute;
  animation: ${bikeScroll} linear forwards;
  animation-timeline: view();
  animation-range: cover 0% cover 35%;
`;

const SocialLinksContainer = styled.div`
  width: 80vw;
  height: 100%;
  margin-left: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  font-family: "Heathergreen";
  font-size: 8vw;
  margin-bottom: -5vw;
  margin-left: 18vw;
  z-index: 3;
  line-height: 0.5;
  color: ${colors.white};
  text-shadow: -3px -3px 0 ${colors.black}, 3px -3px 0 ${colors.black},
    -3px 3px 0 ${colors.black}, 3px 3px 0 ${colors.black};

  @supports ((text-stroke: 3px black) or (-webkit-text-stroke: 3px black)) {
    color: transparent;
    -webkit-text-stroke: 3px ${colors.black};
    text-stroke: 3px ${colors.black};
    text-shadow: none;
  }
`;

const socialScroll = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
  `;

const SocialLinks = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  li {
    display: inline-block;
    position: relative;
  }

  svg {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: all 265ms ease-out;

    path {
      fill: ${colors.white};
    }
  }

  a {
    width: 6vw;
    height: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${socialScroll} linear forwards;
    animation-timeline: view();
    animation-range: cover 0% cover 15%;

    &:before {
      transform: scale(1);
      -ms-transform: scale(1);
      -webkit-transform: scale(1);
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 100%;
      display: block;
      background: linear-gradient(45deg, ${colors.yellow}, ${colors.orange});
      transition: all 265ms ease-out;
      position: absolute;
      bottom: -5%;
      right: -5%;
    }

    &:after {
      transform: scale(1);
      -ms-transform: scale(1);
      -webkit-transform: scale(1);
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 100%;
      display: block;
      background: transparent;
      border: 1px solid ${colors.black};
      transition: all 265ms ease-out;
      z-index: 1;
    }

    &:hover:before,
    &:hover:after {
      transform: scale(0);
      transition: all 265ms ease-in;
    }

    &:hover svg {
      height: 85%;
      width: 85%;
      transition: all 265ms ease-in;

      path {
        fill: url(#gradient);
      }
    }
  }
`;

export default function Socials() {
  return (
    <SocialsContainer id="socials">
      <svg width="0" height="0">
        <linearGradient
          id="gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
          gradientTransform="rotate(45)"
        >
          <stop stopColor={colors.yellow} offset="0%" />
          <stop stopColor={colors.orange} offset="100%" />
        </linearGradient>
      </svg>
      <Img src={Bike} />
      <SocialLinksContainer>
        <Text>GET TO KNOW THE REAL ME</Text>
        <SocialLinks>
          <li>
            <a href="https://github.com/tyler7771">
              <FontAwesomeIcon icon={faGithub} inverse />
            </a>
          </li>
          <li>
            <a href="https://www.threads.net/@tylerfields777">
              <FontAwesomeIcon icon={faThreads} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tyler7771/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tylerfields777/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Tofu777/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
        </SocialLinks>
      </SocialLinksContainer>
    </SocialsContainer>
  );
}
