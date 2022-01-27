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
    <footer className="h-24 flex items-center justify-between px-8 py-2 border-t border-zinc-800 bg-zinc-900">
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
