import CenterConsole from "./Player/CenterConsole";
import LeftConsole from "./Player/LeftConsole";
import RightConsole from "./Player/RightConsole";

/**
 * Represents the Player Bar at the bottom of the page.
 *
 * Includes song information and controls.
 */
function Player() {
  return (
    <footer className="flex h-24 items-center justify-between border-t border-zinc-800 bg-zinc-900 px-8 py-2">
      <LeftConsole songName="Current Song" artist="Current Artist" />
      <CenterConsole
        isPlaying={false}
        songDuration={240}
        currentTime={40}
        shuffle={false}
        repeat={false}
      />
      <RightConsole volume={80} muted={false} />
    </footer>
  );
}

export default Player;
