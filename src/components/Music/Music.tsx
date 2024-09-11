import { useEffect, useState } from "react";

import Arrow from "../../assets/images/Arrow.png";
import Phone from "../../assets/images/Phone.png";
import { colors } from "../../assets/cssHelpers";
import { fetchCurrentlyPlaying } from "./services";
import styled from "styled-components";

const MusicContainer = styled.section`
  width: 100%;
  height: 40vw;
  background-color: ${colors.grey};
  position: relative;
  padding-top: 3vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 999px) {
    height: 42vw;
  }

  @media (max-width: 600px) {
    height: 44vw;
  }

  @media (max-width: 500px) {
    height: 39vh;
    padding: 0;
  }
`;

const Text = styled.span`
  margin: -2vw auto -1vw;
  padding-left: 4vw;
  text-align: center;
  width: 50vw;
  display: block;
  font-family: "Heathergreen";
  font-size: 12vw;
  line-height: 0.8;
  color: ${colors.black};
  text-shadow: -2px -2px 0 ${colors.white}, 2px -2px 0 ${colors.white},
    -2px 2px 0 ${colors.white}, 2px 2px 0 ${colors.white};

  @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
    color: transparent;
    -webkit-text-stroke: 2px ${colors.white};
    text-stroke: 2px ${colors.white};
    text-shadow: none;

    span {
      -webkit-text-stroke: 0;
      text-stroke: 0;
      border: none;
    }
  }

  span {
    text-shadow: none;
    color: ${colors.orange};
  }

  @media (max-width: 500px) {
    width: 100vw;
    font-size: 24vw;
    margin-bottom: -2vw;
  }
`;

const Wrapper = styled.a`
  width: 30vw;
  height: 36.5vw;
  display: block;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 30vh;
    height: 36.5vh;
  }
`;

const StyledPhone = styled.div`
  background-image: url(${Phone});
  background-position: center top;
  background-size: cover;
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 4.7%;
    bottom: 0px;
    right: 9.6%;
    left: 9.6%;
    background: ${colors.grey};
    z-index: 1;
    border-radius: 6.5%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 8.8%;
    bottom: 85%;
    right: 34%;
    left: 34%;
    background: black;
    z-index: 2;
    border-radius: 39px;
  }
`;

const StyledArrow = styled.img`
  right: -4vw;
  width: 9vw;
  position: absolute;
  z-index: 3;
  transform: rotate(124deg);

  @media (max-width: 500px) {
    right: -6vw;
    width: 15vw;
  }
`;

const StyledAlbumArt = styled.div<{ $url: string }>`
  background-image: url(${({ $url }) => $url});
  background-position: center top;
  background-size: cover;
  position: absolute;
  top: 5%;
  left: 50%;
  width: 24vw;
  height: 24vw;
  z-index: 2;
  transform: translateX(-50%);
  border-radius: 8% 8% 0 0;

  @media (max-width: 500px) {
    width: 24vh;
    height: 24vh;
  }
`;

const NowPlayingInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  width: 24vw;
  height: 15vw;
  background: linear-gradient(to bottom, transparent 0%, black 50%);
  padding: 8vw 1.3vw 0;

  @media (max-width: 500px) {
    width: 24vh;
    height: 15vh;
    padding: 8vh 2vw 0;
  }
`;

const SongName = styled.p`
  font-family: "Inter Bold";
  font-size: 1.5vw;
  color: ${colors.white};
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 999px) {
    font-size: 1.75vw;
  }
  @media (max-width: 500px) {
    font-size: 3.5vw;
  }
`;

const Artist = styled.p`
  font-size: 1vw;
  color: ${colors.white};
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 999px) {
    font-size: 1.25vw;
  }

  @media (max-width: 500px) {
    font-size: 2.5vw;
  }
`;

const Subtext = styled.span`
  position: absolute;
  color: ${colors.white};
  font-family: "Inter Bold";
  font-size: 1.25vw;
  bottom: 0.5vw;
  right: 1vw;

  span {
    color: ${colors.orange};
    font-size: 1.5vw;
  }

  @media (max-width: 999px) {
    font-size: 1.5vw;

    span {
      font-size: 2vw;
    }
  }

  @media (max-width: 500px) {
    width: 22vw;
    font-size: 2.5vw;
    text-align: right;

    span {
      font-size: 3vw;
    }
  }
`;

export default function Music() {
  const [nowPlaying, setNowPlaying] = useState({
    artist: "",
    href: "",
    name: "",
    songImage: "",
  });
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const { is_playing: isPlaying, item } = await fetchCurrentlyPlaying();
      if (isPlaying) {
        setNowPlaying({
          songImage: item.album.images[0].url,
          artist: item.artists.map((artist: any) => artist.name).join(", "),
          href: item.external_urls.spotify,
          name: item.name,
        });
      } else {
        setNowPlaying({
          artist: "",
          href: "",
          name: "",
          songImage: "",
        });
        console.log("not playing");
      }
    };
    fetchNowPlaying();

    setInterval(() => {
      fetchNowPlaying();
    }, 5000);
  }, []);

  return nowPlaying.artist ? (
    <MusicContainer id="music">
      <Text>
        NOW PLAYING<span> *</span>
      </Text>
      <Wrapper href={nowPlaying.href} target="_blank">
        <StyledPhone>
          <StyledArrow src={Arrow} />
          <StyledAlbumArt $url={nowPlaying.songImage} />
          <NowPlayingInfo>
            <SongName>{nowPlaying.name}</SongName>
            <Artist>{nowPlaying.artist}</Artist>
          </NowPlayingInfo>
        </StyledPhone>
      </Wrapper>
      <Subtext>
        <span>*</span> Seriously, what I'm listening to this second
      </Subtext>
    </MusicContainer>
  ) : null;
}
