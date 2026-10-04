import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Tracker() {
  const navigate = useNavigate();

  const [shortUrl, setShortUrl] = useState("");
  const [clickCount, setClickCount] = useState(null);

  const handleTrackClicks = async () => {
    const shortCode = shortUrl.split("/").pop();

    const response = await fetch(
      `http://localhost:8081/api/urls/${shortCode}/clicks`
    );

    const data = await response.json();

    setClickCount(data.clickCount);
  };

  return (
    <section className="w-full max-w-3xl flex flex-col items-center bg-white py-5 rounded-2xl border border-mist-300 shadow-lg p-13">

      <span className="text-4xl font-bold text-gray-600">
        URL Click Counter
      </span>

      <span className="flex flex-col items-center text-center mt-2">
        <span>
          Enter the URL to track how many clicks it received.
        </span>
      </span>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTrackClicks();
        }}
        className="w-full flex flex-col sm:flex-row border border-gray-200 m-5 rounded shadow"
      >
        <input
          type="text"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
          className="flex-1 pl-5 py-2.5"
          placeholder="Enter here your shortened URL"
          required
        />

        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white p-2 rounded-r cursor-pointer"
        >
          Track Clicks
        </button>
      </form>

      {clickCount !== null && (
        <span className="text-2xl font-semibold text-gray-600">
          Total Clicks: {clickCount}
        </span>
      )}

      <div className="w-full flex flex-col items-start gap-4 mt-5">

        <span>
          Example: http://localhost:8081/ht0Lk65
        </span>

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

export default Tracker;