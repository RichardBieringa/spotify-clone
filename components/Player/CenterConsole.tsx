import IconWrapper from "@/components/common/IconWrapper";
import useSpotify from "@/hooks/useSpotify";

import {
  IoRepeatOutline,
  IoShuffleOutline,
  IoPlayCircleSharp,
  IoPauseCircleSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";

interface Props {
  /** Controls the song shuffle feature. */
  shuffle: boolean;
  /** Controls the song repeat feature. */
  repeat: boolean;
  /** The duration of the currently selected song. */
  songDuration: number;
  /** The play time of the currently selected song. */
  currentTime: number;
  /** Controls whether the song is playing. */
  isPlaying: boolean;
}

/**
 * Converts the time in seconds to a string representation.
 * mm:ss
 */
const formatTime = (seconds: number): string => {
  return new Date(seconds * 1000).toISOString().substring(14, 19);
};

/**
 * Represents how far the song is compared to the total duration.
 *
 * Max can be changed to change the range from 1-100 (default) to e.g. 1-1000
 */
const calcSeekRatio = (
  current: number | undefined,
  duration: number | undefined,
  max: number = 100
) => {
  if (!current || !duration) return 0;
  return Math.round((current / duration) * max);
};

/**
 * The Center Console in the Player Component.
 *
 * Contains the main song controls.
 */
const CenterConsole = ({
  isPlaying,
  currentTime,
  songDuration,
  shuffle,
}: Props) => {
  const spotifyApi = useSpotify();

  return (
    <div className="flex h-full grow flex-col items-center justify-between">
      {/* Music Control Buttons */}
      <div className="flex w-64 items-center justify-between">
        {/* Button to shuffle songs */}
        <button
          onClick={() => {
            spotifyApi.setShuffle(!shuffle).catch(console.error);
          }}
        >
          <IconWrapper size={20}>
            <IoShuffleOutline />
          </IconWrapper>
        </button>

        {/* Button to go to previous song */}
        <button
          onClick={() => {
            spotifyApi.skipToPrevious().catch(console.error);
          }}
        >
          <IconWrapper size={20}>
            <IoPlaySkipBackSharp />
          </IconWrapper>
        </button>

        {/* Larger Play button */}
        <button
          onClick={() => {
            if (isPlaying) {
              spotifyApi.pause().catch(console.error);
            } else {
              spotifyApi.play().catch(console.error);
            }
          }}
        >
          <IconWrapper size={45}>
            {isPlaying ? <IoPauseCircleSharp /> : <IoPlayCircleSharp />}
          </IconWrapper>
        </button>

        {/* Button to skip song */}
        <button
          onClick={() => {
            spotifyApi.skipToNext().catch(console.error);
          }}
        >
          <IconWrapper size={20}>
            <IoPlaySkipForwardSharp />
          </IconWrapper>
        </button>

        {/* Button to activate repeat */}
        <button
          onClick={() => {
            spotifyApi.setRepeat("off").catch(console.error);
          }}
        >
          <IconWrapper size={20}>
            <IoRepeatOutline />
          </IconWrapper>
        </button>
      </div>

      {/* Music Time Controls */}
      <div className="flex w-full max-w-xs grow items-center justify-between">
        <span className="text-xs text-gray-300">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value={calcSeekRatio(currentTime, songDuration)}
          readOnly
          className="mx-2 h-1 grow cursor-pointer appearance-none rounded-lg bg-gray-400 p-0  focus:shadow-none focus:outline-none focus:ring-0"
        />
        <span className="text-xs text-gray-300">
          {formatTime(songDuration)}
        </span>
      </div>
    </div>
  );
};

export default CenterConsole;
