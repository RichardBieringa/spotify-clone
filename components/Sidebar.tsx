import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusIcon,
  HeartIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { signOut } from "next-auth/react";

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

function Sidebar() {
  return (
    <div className="flex flex-col space-y-2 bg-gray-300">
      <button
        className="flex items-center space-x-2 p-4 border-gray-900 text-gray-500 hover:text-white"
        onClick={() => {
          signOut();
        }}
      >
        <LogoutIcon className="w-6 h-6" />
        <span>Sign out</span>
      </button>

      <button className="flex items-center space-x-2 p-4 border-gray-900 text-gray-500 hover:text-white">
        <HomeIcon className="w-6 h-6" />
        <span>Home</span>
      </button>

      <button className="flex items-center space-x-2 p-4 border-gray-900 text-gray-500 hover:text-white">
        <SearchIcon className="w-6 h-6" />
        <span>Seach</span>
      </button>

      <button className="flex items-center space-x-2 p-4 border-gray-900 text-gray-500 hover:text-white">
        <LibraryIcon className="w-6 h-6" />
        <span>Your Library</span>
      </button>

      <hr className="border-gray-500" />

      <button className="flex items-center space-x-2 p-4 border-gray-900 text-gray-500 hover:text-white">
        <PlusIcon className="w-6 h-6" />
        <span>Create Playlist</span>
      </button>

      <button className="flex items-center space-x-2 p-4 border-gray-900 text-gray-500 hover:text-white">
        <HeartIcon className="w-6 h-6" />
        <span>Liked Songs</span>
      </button>

      {/* Playlist */}
      <p className="mx-auto cursor-pointer hover:text-white">Playlist x...</p>
      <p className="mx-auto cursor-pointer hover:text-white">Playlist x...</p>
      <p className="mx-auto cursor-pointer hover:text-white">Playlist x...</p>
      <p className="mx-auto cursor-pointer hover:text-white">Playlist x...</p>
      <p className="mx-auto cursor-pointer hover:text-white">Playlist x...</p>
      <p className="mx-auto cursor-pointer hover:text-white">Playlist x...</p>
    </div>
  );
}

export default Sidebar;
