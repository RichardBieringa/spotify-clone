import { DotsCircleHorizontalIcon, HeartIcon } from "@heroicons/react/outline";

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
    <div className="h-full w-48 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="font-bold text-sm text-white">{songName}</span>
        <span className="font-bold text-xs text-gray-300">{artist}</span>
      </div>

      <div className="flex ml-6">
        <HeartIcon className="w-6 h-6 mx-2 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
        <DotsCircleHorizontalIcon className="w-6 h-6 mx-2 text-gray-400 hover:text-gray-300 hover:scale-110 transition duration-75 cursor-pointer" />
      </div>
    </div>
  );
};

export default LeftConsole;
