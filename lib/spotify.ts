import SpotifyWebApi from "spotify-web-api-node";

// Spotify User scopes as defined in
// https://developer.spotify.com/documentation/general/guides/authorization/scopes/
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-private",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-modify-playback-state",
  "user-read-playback-state",
].join(",");

const params = {
  scope: scopes,
};
const queryParams = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParams.toString()}`;

const client = new SpotifyWebApi();

export default client;
export { LOGIN_URL };
