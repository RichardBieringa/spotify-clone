import Profile from "@/components/Profile";

function TopNav() {
  return (
    <nav className="absolute flex w-full flex-row justify-end bg-slate-400 p-4">
      <Profile username={undefined} profilePicture={undefined}></Profile>
    </nav>
  );
}

export default TopNav;
