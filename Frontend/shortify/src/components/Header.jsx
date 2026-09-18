function Header() {
  return (
    <header className="flex justify-center items-baseline w-full px-3">
      <a
        href="/"
        className="text-6xl font-bold text-blue-400 px-2 py-10"
      >
        Shortify
      </a>

      <span className="font-bold">by</span>

      <span className="ml-1 font-bold text-blue-500">
        MrHypix
      </span>
    </header>
  );
}

export default Header;