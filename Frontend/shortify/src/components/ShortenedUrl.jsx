import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function UrlShortener() {
  const navigate = useNavigate();
  const location = useLocation();

  const { url, shortUrl } = location.state || {};
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="w-full max-w-3xl flex flex-col items-center bg-white py-5 rounded-2xl border border-mist-300 shadow-lg p-13">
      
      <span className="text-4xl font-bold text-gray-600">
        Your shortened URL
      </span>

      <span className="flex flex-col items-center text-center">
        <span>
          Copy the short link and share it in messages, texts, posts, websites
          and other locations.
        </span>
      </span>

      <form
        className="w-full flex flex-col sm:flex-row border border-gray-200 m-5 rounded shadow"
      >
        <input
          type="text"
          value={shortUrl || ""}
          readOnly
          className="flex-1 pl-5 py-2.5"
          placeholder="Your shortened URL"
        />

        <button
          type="button"
          onClick={handleCopy}
          className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white p-2 rounded-r cursor-pointer"
        >
          {copied ? "Copied!" : "Copy URL"}
        </button>
      </form>

      <div className="w-full flex flex-col items-start gap-2">
        <span>Long URL: {url}</span>

        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white p-2 rounded cursor-pointer"
        >
          Total of clicks of your short URL
        </button>

        <button
          type="button"
          onClick={() => navigate("/", { replace: true })}
          className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white p-2 rounded cursor-pointer"
        >
          Shorten another URL
        </button>
      </div>

      <span className="flex flex-col items-center text-center mt-4">
        <span>
          * Short URLs that do not have at least one click per month are
          disabled
        </span>
      </span>

    </section>
  );
}

export default UrlShortener;