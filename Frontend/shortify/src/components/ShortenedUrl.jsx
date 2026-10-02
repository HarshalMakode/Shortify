import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8081/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: url,
    });

    const data = await response.json();

    setShortUrl(`http://localhost:8081/${data.shortCode}`);
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
        onSubmit={handleSubmit}
        className="w-full flex flex-col sm:flex-row border border-gray-200 m-5 rounded shadow"
      >
        <input
          type="text"
          value={shortUrl}
          readOnly
          className="flex-1 pl-5 py-2.5"
          placeholder="Your shortened URL"
        />

        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(shortUrl)}
          className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white p-2 rounded-r cursor-pointer"
        >
          Copy URL
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