import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import useSpotify from "@/hooks/useSpotify";

import CenterConsole from "@/components/Player/CenterConsole";
import LeftConsole from "@/components/Player/LeftConsole";
import RightConsole from "@/components/Player/RightConsole";

/**
 * Represents the Player Bar at the bottom of the page.
 *
 * Includes song information and controls.
 */
function Player() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();

  const [track, setTrack] = useState<string | undefined>();
  const [artist, setArtist] = useState<string | undefined>();
  const [albumImageUrl, setAlbumImageUrl] = useState<string | undefined>();

  const [shuffle, setShuflle] = useState(false);
  const [repeat, setRepeat] = useState<"off" | "track" | "context">("off");
  const [playing, setPlaying] = useState(false);

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volumePercent, setVolumePercent] = useState(0);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getMyCurrentPlaybackState()
        .then(({ body }) => {
          const {
            shuffle_state,
            repeat_state,
            is_playing,
            progress_ms,
            device,
          } = body;

          // Song state
          setShuflle(shuffle_state);
          setRepeat(repeat_state);
          setPlaying(is_playing);

          // Playback device state
          if (device.volume_percent) {
            setVolumePercent(device.volume_percent);
          }

          if (body.currently_playing_type === "track") {
            const currentTrack = body.item as SpotifyApi.TrackObjectFull;

            setTrack(currentTrack.name);
            setArtist(currentTrack.artists[0].name);
            setAlbumImageUrl(currentTrack.album.images[0].url);

            // Current time (seek) of the current track
            if (progress_ms) {
              setProgress(progress_ms);
            }
            setDuration(currentTrack.duration_ms);
          }
        })
        .catch(({ status, message }: SpotifyApi.ErrorObject) => {
          console.error(status);
          console.error(message);
        });
    }
  }, [session, spotifyApi]);

  return (
    <footer className="flex h-24 items-center justify-between border-t border-zinc-800 bg-zinc-900 px-4 py-2">
      <LeftConsole
        track={track}
        artist={artist}
        albumImageUrl={albumImageUrl}
        isFavourite={false}
      />
      <CenterConsole
        isPlaying={playing}
        songDuration={duration / 1000}
        currentTime={progress / 1000}
        shuffle={shuffle}
        repeat={repeat === "off" ? false : true}
      />
      <RightConsole volume={volumePercent} muted={volumePercent === 0} />
    </footer>
  );
}

export default Player;
