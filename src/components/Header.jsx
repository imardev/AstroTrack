import { GitHubIcon } from "../icons/GitHubIcon.jsx";

function Header() {
  return (
    <header className="bg-[#040817] text-white px-8 text-xl font-bold py-2 flex justify-between">
      <span>AstroTrack</span>
      <div className="github flex gap-2">
        <a
          href="https://github.com/imardev/AstroTrack"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition duration-500 group"
        >
          <GitHubIcon className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition duration-500" />
          <span>View on GitHub</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
