import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { Profile } from "next-auth";

import useComponentVisible from "@/hooks/useComponentVisible";
import { LogoutIcon } from "@heroicons/react/outline";
import { AiOutlineUser } from "react-icons/ai";

/**
 * The Profile component is a floating profile button that contains
 * navigation content related to the user account such as the sign out
 * functionality.
 */
const Profile = () => {
  // Uses a custom hook to check if the user clicked outside of the dropdown box
  // and closes this whenever this happens
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  // Retrieve the username and profile picture from the session info
  const { data: session } = useSession();
  const name = session?.user?.name;
  const image = session?.user?.image;

  return (
    <div className="fixed top-5 right-10 z-10">
      <div
        className="flex cursor-pointer flex-row items-center justify-between rounded-full bg-zinc-800 text-sm font-semibold text-white"
        onClick={() => setIsComponentVisible(true)}
      >
        {/* Porifle image (either default icon or user image) */}
        <div className="m-[0.2] h-8 w-8 overflow-hidden rounded-full border border-solid border-zinc-800 bg-zinc-700">
          {image !== undefined ? (
            <Image src={image} alt="Profile picture" width={8} height={8} />
          ) : (
            <AiOutlineUser className="h-full w-full" />
          )}
        </div>

        {/*  */}
        <span className="w-24 overflow-hidden whitespace-nowrap px-2 text-xs">
          {name ?? "username"}
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
};

export default Profile;
