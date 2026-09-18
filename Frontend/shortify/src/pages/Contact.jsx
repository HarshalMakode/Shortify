function Footer() {
  const links = [
    "ShortURL",
    "URL Click Counter",
    "Unshorten URL",
    "Report Malicious URL",
    "Terms of Service",
    "Privacy",
    "Contact",
  ];

  return (
    <>
      <div className="w-full bg-blue-400 h-1 mt-10" />

      <footer className="w-full px-10 py-5 flex flex-col bg-[#333]">

        <span className="flex justify-center text-white">
          © 2026 Shortify.at - Tool to shorten a long link
        </span>

        <span className="flex justify-center text-white mb-2">
          Powered by
          <span className="ml-1 font-semibold text-blue-500">
            MrHypix
          </span>
        </span>

        <div className="flex flex-col lg:flex-row font-semibold justify-center text-blue-500 divide-y lg:divide-y-0 lg:divide-x divide-black">

          {links.map((link) => (
            <a
              key={link}
              className="px-3 py-2"
              href="/"
            >
              {link}
            </a>
          ))}

        </div>

      </footer>
    </>
  );
}

export default Footer;