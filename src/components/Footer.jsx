export default function Footer() {
  return (
    <footer className="border-t border-white/10  py-6 px-8 text-sm text-gray-400 bg-[#0a0e1a]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-medium">AstroTrack</span>

        <a
          href="https://github.com/imardev/AstroTrack"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          Open source • MIT License
        </a>
      </div>

      <div className="flex flex-col items-center text-center text-xs text-gray-500 gap-1">
        <span>Data provided by NASA JPL NEO Program</span>
        <span>Open data • No tracking</span>
      </div>
    </footer>
  );
}
