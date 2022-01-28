import { HiOutlineDotsCircleHorizontal, HiOutlineHeart } from "react-icons/hi";

import IconWrapper from "@/components/common/IconWrapper";

interface Props {
  songName: string;
  artist: string;
}

/**
 * The Left Console of the Player Component.
 *
 * Contains the Song Information of the currently selected song.
 */
const LeftConsole = ({ songName, artist }: Props) => {
  return (
    <div className="flex h-full w-48 items-center justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-bold text-white">{songName}</span>
        <span className="text-xs font-bold text-gray-300">{artist}</span>
      </div>

      <div className="ml-6 flex">
        <IconWrapper>
          <HiOutlineHeart />
        </IconWrapper>

        <IconWrapper>
          <HiOutlineDotsCircleHorizontal />
        </IconWrapper>
      </div>
    </div>
  );
};

export default LeftConsole;
