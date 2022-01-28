import IconWrapper from "../common/IconWrapper";

import {
  IoVolumeLowOutline,
  IoVolumeMuteOutline,
  IoDesktopOutline,
  IoReorderFourOutline,
} from "react-icons/io5";
import { BsArrowsAngleExpand } from "react-icons/bs";

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
      <IconWrapper size={25}>
        <IoReorderFourOutline />
      </IconWrapper>

      <IconWrapper size={25}>
        <IoDesktopOutline />
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
          <IconWrapper size={25}>
            <IoVolumeMuteOutline />
          </IconWrapper>
        ) : (
          <IconWrapper size={25}>
            <IoVolumeLowOutline />
          </IconWrapper>
        )}
      </div>

      <IconWrapper size={15}>
        <BsArrowsAngleExpand />
      </IconWrapper>
    </div>
  );
};

export default RightConsole;
