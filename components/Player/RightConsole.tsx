import {
  ArrowsExpandIcon,
  DesktopComputerIcon,
  MenuIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from "@heroicons/react/outline";

interface Props {
  volume: number;
  muted: boolean;
}

/**
 * The Right Console of the player component.
 *
 * Contains volume controls.
 */
const RightConsole = ({ volume, muted }: Props) => {
  return (
    <div className="h-full w-64 flex justify-between items-center">
      <MenuIcon className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
      <DesktopComputerIcon className="w-6 h-6  text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />

      <div className="flex justify-center items-center">
        {/* Slider */}
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          // value="80"
          className="h-1 w-24 p-0 cursor-pointer bg-gray-400 appearance-none rounded-lg  focus:outline-none focus:ring-0 focus:shadow-none"
        />

        {/* ICON */}
        {muted ? (
          <VolumeUpIcon className="w-6 h-6 ml-2 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
        ) : (
          <VolumeOffIcon className="w-6 h-6 ml-2 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
        )}
      </div>

      <ArrowsExpandIcon className="w-6 h-6 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
    </div>
  );
};

export default RightConsole;
