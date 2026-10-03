import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Counter() {
  const navigate = useNavigate();
  const location = useLocation();

  const { url, shortUrl, shortCode } = location.state || {};

  const [copied, setCopied] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const getClickCount = async () => {
      const response = await fetch(
        `http://localhost:8081/api/urls/${shortCode}/clicks`
      );

      const data = await response.json();

      setClickCount(data.clickCount);
    };

    if (shortCode) {
      getClickCount();
    }
  }, [shortCode]);


  return (
    <section className="w-full max-w-3xl flex flex-col items-center bg-white py-5 rounded-2xl border border-mist-300 shadow-lg p-13">
      <span className="text-4xl font-bold text-gray-600">
        Total URL Clicks
      </span>

      <span className="flex flex-col items-center text-center mt-2">
        <span>
          The number of clicks from the shortened URL that redirected the user to the destination page.
        </span>
      </span>

      <form className="w-full flex flex-col sm:flex-row border border-gray-200 m-5 rounded shadow">
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
        <span>
          Long URL: {url}
        </span>

        <span className="text-2xl font-bold text-gray-600">
          Count: {clickCount}
        </span>

        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white p-2 rounded cursor-pointer"
        >
          Track clicks from another short URL
        </button>

        <button
          type="button"
          onClick={() => navigate("/", { replace: true })}
          className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white p-2 rounded cursor-pointer"
        >
          Shorten another URL
        </button>
      </div>
    </section>
  );
}

export default Counter;
