import IconWrapper from "@/components/common/IconWrapper";

import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineLightningBolt,
  HiOutlinePause,
  HiOutlinePlay,
  HiOutlineRefresh,
} from "react-icons/hi";

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
 * The Center Console in the Player Component.
 *
 * Contains the main song controls.
 */
const CenterConsole = ({ isPlaying, currentTime, songDuration }: Props) => {
  return (
    <div className="flex h-full grow flex-col items-center justify-between">
      {/* Music Control Buttons */}
      <div className="flex w-64 items-center justify-between">
        {/* Button to shuffle songs */}
        <IconWrapper size={30}>
          <HiOutlineLightningBolt className="h-6 w-6 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
        </IconWrapper>

        {/* Button to go to previous song */}
        <IconWrapper size={30}>
          <HiOutlineArrowLeft className="h-6 w-6 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
        </IconWrapper>

        {/* Larger Play button */}
        <IconWrapper size={40}>
          {isPlaying ? (
            <HiOutlinePause className="h-12 w-12 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
          ) : (
            <HiOutlinePlay className="h-12 w-12 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
          )}
        </IconWrapper>

        {/* Button to skip song */}
        <IconWrapper size={30}>
          <HiOutlineArrowRight className="h-6 w-6 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
        </IconWrapper>

        {/* Button to activate repeat */}
        <IconWrapper size={30}>
          <HiOutlineRefresh className="h-6 w-6 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
        </IconWrapper>
      </div>

      {/* Music Time Controls */}
      <div className="flex w-full max-w-xs grow items-center justify-between">
        <span className="text-xs text-gray-300">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          // value="80"
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
