import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusIcon,
  HeartIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import IconWrapper from "./common/IconWrapper";
import { BsSpotify } from "react-icons/bs";

interface ButtonProps {
  type: string;
  size: number;
}

function SidebarButton({ type, size }: ButtonProps) {
  return (
    <button className="flex items-center space-x-2 border-gray-900 p-4 text-gray-500 hover:text-white">
      <HomeIcon className="h-6 w-6" />
      <span>Home</span>
    </button>
  );
}

interface SidebarProps {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}

function Sidebar({ playlists }: SidebarProps) {
  const [playlist, setPlaylist] =
    useState<SpotifyApi.PlaylistObjectSimplified | null>(null);

  return (
    <div className="flex min-h-0 flex-col space-y-2">
      {/* Logo */}
      <div className="m-4 flex cursor-pointer items-center text-white hover:text-white">
        <BsSpotify className="h-10 w-10" />
        <span className="mx-2 text-xl font-bold">Spotify</span>
      </div>

      {/* Buttons */}
      <div className="m-4 flex flex-col">
        <button className="my-2 flex items-center border-gray-900 font-semibold text-gray-400 transition-colors hover:text-white">
          <HomeIcon className="h-8 w-6" />
          <span className="mx-2">Home</span>
        </button>

        <button className="my-2 flex items-center border-gray-900 font-semibold text-gray-400 transition-colors hover:text-white">
          <SearchIcon className="h-6 w-6" />
          <span className="mx-2">Seach</span>
        </button>

        <button className="my-2 flex items-center border-gray-900 font-semibold text-gray-400 transition-colors hover:text-white">
          <LibraryIcon className="h-6 w-6" />
          <span className="mx-2">Your Library</span>
        </button>

        <br className="my-4" />

        <button className="my-2 flex items-center border-gray-900 font-semibold text-gray-400 transition-colors hover:text-white">
          <PlusIcon className="h-6 w-6" />
          <span className="mx-2">Create Playlist</span>
        </button>

        <button className="my-2 flex items-center border-gray-900 font-semibold text-gray-400 transition-colors hover:text-white">
          <HeartIcon className="h-6 w-6" />
          <span className="mx-2">Liked Songs</span>
        </button>
      </div>

      <hr className="mx-4 border-gray-500" />

      {/* Playlist */}
      <ul className="fleg-grow ml-4 mr-1 min-h-0 overflow-y-scroll">
        {playlists.map((playlist) => {
          return (
            <li
              key={playlist.id}
              className="mx-auto cursor-pointer overflow-x-hidden text-ellipsis whitespace-nowrap py-1 text-gray-400 hover:text-white"
              onClick={() => setPlaylist(playlist)}
            >
              {playlist.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
