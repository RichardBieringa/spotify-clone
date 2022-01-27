import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LightningBoltIcon,
  PauseIcon,
  PlayIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

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
    <div className="h-full grow flex flex-col items-center justify-between">
      {/* Music Control Buttons */}
      <div className="w-64 flex items-center justify-between">
        <LightningBoltIcon className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
        <ArrowLeftIcon className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
        {isPlaying ? (
          <PauseIcon className="w-12 h-12 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
        ) : (
          <PlayIcon className="w-12 h-12 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
        )}
        <ArrowRightIcon className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
        <RefreshIcon className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
      </div>

      {/* Music Time Controls */}
      <div className="grow w-full flex justify-between items-center max-w-xs">
        <span className="text-gray-300 text-xs">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          // value="80"
          className="h-1 grow mx-2 p-0 cursor-pointer bg-gray-400 appearance-none rounded-lg  focus:outline-none focus:ring-0 focus:shadow-none"
        />
        <span className="text-gray-300 text-xs">
          {formatTime(songDuration)}
        </span>
      </div>
    </div>
  );
};

export default CenterConsole;
