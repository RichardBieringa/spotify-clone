import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusIcon,
  HeartIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { signOut } from "next-auth/react";
import IconWrapper from "./common/IconWrapper";
import { BsSpotify } from "react-icons/bs";

interface ButtonProps {
  type: string;
  size: number;
}

function SidebarButton({ type, size }: ButtonProps) {
  return (
    <button className="flex items-center space-x-2 p-4 border-gray-900 text-gray-500 hover:text-white">
      <HomeIcon className="w-6 h-6" />
      <span>Home</span>
    </button>
  );
}

interface SidebarProps {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}

function Sidebar({playlists}: SidebarProps) {

  const [playlist, setPlaylist] = useState<SpotifyApi.PlaylistObjectSimplified | null>(null)

  return (
    <div className="flex flex-col space-y-2 mx-4">

      {/* Logo */}
      <div className="my-4 flex items-center text-white cursor-pointer hover:text-white">
        <BsSpotify className="w-10 h-10" />
        <span className="mx-2 text-xl font-bold">Spotify</span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col">
        <button
          className="flex items-center border-gray-900 text-gray-400 hover:text-white"
          onClick={() => {
            signOut();
          }}
        >
          <LogoutIcon className="w-6 h-6" />
          <span>Sign out</span>
        </button>

        <button className="flex my-2 items-center border-gray-900 font-semibold text-gray-400 hover:text-white transition-colors">
          <HomeIcon className="w-6 h-8" />
          <span className="mx-2">Home</span>
        </button>

        <button className="flex my-2 items-center border-gray-900 font-semibold text-gray-400 hover:text-white transition-colors">
          <SearchIcon className="w-6 h-6" />
          <span className="mx-2">Seach</span>
        </button>

        <button className="flex my-2 items-center border-gray-900 text-gray-400 font-semibold hover:text-white transition-colors">
          <LibraryIcon className="w-6 h-6" />
          <span className="mx-2">Your Library</span>
        </button>

        <br className="my-4"/>

        <button className="flex my-2 items-center border-gray-900 text-gray-400 font-semibold hover:text-white transition-colors">
          <PlusIcon className="w-6 h-6" />
          <span className="mx-2">Create Playlist</span>
        </button>

        <button className="flex my-2 items-center border-gray-900 text-gray-400 font-semibold hover:text-white transition-colors">
          <HeartIcon className="w-6 h-6" />
          <span className="mx-2">Liked Songs</span>
        </button>
      </div>



      <hr className="border-gray-500" />

      {/* Playlist */}
      <ul className="overflow-y-scroll w-full">
      {
          playlists.map((playlist) => {
            return (
              <li key={playlist.id}
                className="py-1 mx-auto overflow-x-hidden whitespace-nowrap text-ellipsis text-gray-400 cursor-pointer hover:text-white"
                onClick={() => setPlaylist(playlist)}>
                {playlist.name}
              </li>
            )
          })
      }
      </ul>
    </div>
  );
}

export default Sidebar;
