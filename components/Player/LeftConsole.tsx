import Image from "next/image";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

import IconWrapper from "@/components/common/IconWrapper";

interface Props {
  track: string | undefined;
  artist: string | undefined;
  albumImageUrl: string | undefined;
  isFavourite: boolean;
}

/**
 * The Left Console of the Player Component.
 *
 * Contains the Song Information of the currently selected song.
 */
const LeftConsole = ({ track, artist, albumImageUrl, isFavourite }: Props) => {
  return (
    <div className="flex h-full w-56 items-center justify-between space-x-4">
      {albumImageUrl && (
        <Image src={albumImageUrl} alt="Album image" width={64} height={64} />
      )}

      <div className="flex grow flex-col">
        <span className="text-xs font-semibold text-white">{track ?? "-"}</span>
        <span className="text-xs font-semibold text-gray-300">
          {artist ?? "--"}
        </span>
      </div>

      <div className="flex">
        <IconWrapper>
          {isFavourite ? <HiHeart /> : <HiOutlineHeart />}
        </IconWrapper>
      </div>
    </div>
  );
};

export default LeftConsole;
