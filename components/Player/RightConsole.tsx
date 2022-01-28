import {
  HiOutlineArrowsExpand,
  HiOutlineDesktopComputer,
  HiOutlineMenu,
  HiOutlineVolumeOff,
  HiOutlineVolumeUp,
} from "react-icons/hi";

import { HiOutlineDotsCircleHorizontal, HiOutlineHeart } from "react-icons/hi";

import IconWrapper from "../common/IconWrapper";

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
    <div className="flex h-full w-64 items-center justify-between">
      <IconWrapper>
        <HiOutlineMenu className="h-6 w-6 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
      </IconWrapper>

      <IconWrapper>
        <HiOutlineMenu className="h-6 w-6 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
      </IconWrapper>

      <IconWrapper>
        <HiOutlineDesktopComputer className="h-6 w-6  cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
      </IconWrapper>

      <div className="flex items-center justify-center">
        {/* Slider */}
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          // value="80"
          className="h-1 w-24 cursor-pointer appearance-none rounded-lg bg-gray-400 p-0  focus:shadow-none focus:outline-none focus:ring-0"
        />

        {/* ICON */}
        {muted ? (
          <IconWrapper>
            <HiOutlineVolumeUp className="ml-2 h-6 w-6 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
          </IconWrapper>
        ) : (
          <IconWrapper>
            <HiOutlineVolumeOff className="ml-2 h-6 w-6 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
          </IconWrapper>
        )}
      </div>

      <IconWrapper>
        <HiOutlineArrowsExpand className="h-6 w-6 cursor-pointer text-gray-400 transition duration-75 hover:scale-110 hover:text-gray-300" />
      </IconWrapper>
    </div>
  );
};

export default RightConsole;
