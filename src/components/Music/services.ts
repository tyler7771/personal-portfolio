import * as querystring from "querystring";

import {
  clientId,
  clientSecret,
  refreshToken,
} from "../../assets/spotifyParams";

import { Buffer } from "buffer";

export type SpotifyAuthToken = {
  access_token: string;
  expires_in: string;
  token_type: "Bearer";
};

const getAccessToken = async () => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};

// export async function fetchCurrentlyPlaying(authToken: string) {
//   // const response = await fetch(
//   //   "https://api.spotify.com/v1/me/player/currently-playing",
//   //   {
//   //     headers: {
//   //       Authorization: `Bearer ${authToken}`,
//   //     },
//   //   }
//   // );

//   const result = await fetch("https://api.spotify.com/v1/me", {
//     method: "GET",
//     headers: { Authorization: `Bearer ${authToken}` },
//   });

//   debugger;
//   return await result.json();

//   if (response.ok) {
//     const jsonResponse: SpotifyAuthToken = await response.json();
//     debugger;
//   } else {
//     throw new Error(
//       `Request failed! Status code: ${response.status} ${response.statusText}`
//     );
//   }
// }

export async function fetchCurrentlyPlaying(): Promise<any> {
  const { access_token } = await getAccessToken();
  const result = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );

  return result.status === 200 ? await result.json() : {};
}
