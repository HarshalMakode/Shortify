import { Link } from "react-router-dom";

function Footer() {
  const links = [
    { name: "ShortURL", path: "/" },
    { name: "URL Click Counter", path: "/urltracker" },
    { name: "Unshorten URL", path: "/unshorten" },
    { name: "Report Malicious URL", path: "/report" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy", path: "/privacy" },
    { name: "Contact", path: "/contact" },
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
            <Link
              key={link.name}
              to={link.path}
              className="px-3 py-2"
            >
              {link.name}
            </Link>
          ))}

        </div>

      </footer>
    </>
  );
}

export default Footer;