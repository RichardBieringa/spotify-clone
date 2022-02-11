import useComponentVisible from "@/hooks/useComponentVisible";

import Image from "next/image";
import { LogoutIcon } from "@heroicons/react/outline";
import { AiOutlineUser } from "react-icons/ai";

import { signOut } from "next-auth/react";
import { Profile } from "next-auth";
interface ProfileProps {
  username: string | undefined;
  profilePicture: string | undefined;
}

function Profile({ username, profilePicture }: ProfileProps) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div className="fixed top-5 right-10 z-10">
      <div
        className="flex cursor-pointer flex-row items-center justify-between rounded-full bg-zinc-800 text-sm font-semibold text-white"
        onClick={() => setIsComponentVisible(true)}
      >
        {/* Image */}
        <div className="m-[0.2] h-8 w-8 overflow-hidden rounded-full border border-solid border-zinc-800 bg-zinc-700">
          {profilePicture !== undefined ? (
            <Image
              src={profilePicture}
              alt="Profile picture"
              width={8}
              height={8}
            />
          ) : (
            <AiOutlineUser className="h-full w-full" />
          )}
        </div>

        {/*  */}
        <span className="w-24 overflow-hidden text-ellipsis whitespace-nowrap px-4">
          {username ?? "username"}
        </span>

        {/* Open Close Icon */}
        <i className="mr-4 text-xs">{isComponentVisible ? "▲" : "▼"}</i>
      </div>

      {/* Popup */}
      {isComponentVisible && (
        <div
          className="absolute top-10 right-0 w-52 rounded-md bg-zinc-500 p-1 text-white"
          ref={ref}
        >
          <ul>
            <li className="p-2 hover:bg-gray-300">Account</li>
            <li className="p-2 hover:bg-gray-300">Profile</li>
            <li className="p-2 hover:bg-gray-300">Private Session</li>
            <br className="mt-1" />
            <li className="p-2 hover:bg-gray-300">
              <button
                className="flex w-full justify-between"
                onClick={() => signOut()}
              >
                Log out
                <LogoutIcon className="h-6 w-6" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
