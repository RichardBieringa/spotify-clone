import Profile from "@/components/Profile";

function TopNav() {
  return (
    <nav className="absolute my-2 flex w-full flex-row justify-end bg-slate-400">
      <Profile username={undefined} profilePicture={undefined}></Profile>
    </nav>
  );
}

export default TopNav;
