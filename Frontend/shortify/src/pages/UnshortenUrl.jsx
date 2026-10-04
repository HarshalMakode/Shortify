import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UnshortenUrl() {
  const [shortUrl, setShortUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");

  const handleCheck = async (e) => {
    e.preventDefault();

    const shortCode = shortUrl.split("/").pop();

    const response = await fetch(
      `http://localhost:8081/api/urls/${shortCode}/original`
    );

    const data = await response.json();

    setOriginalUrl(data.originalURL);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">

      <Header />

      <main className="flex flex-col items-center gap-5 mx-6">

        <section className="w-full max-w-3xl flex flex-col items-center bg-white py-5 rounded-2xl border border-mist-300 shadow-lg p-13">

          <span className="text-4xl font-bold text-gray-600">
            Unshorten URL
          </span>

          <span className="flex flex-col items-center text-center mt-2">
            <span>
              Enter the short URL to check the destination page.
            </span>
          </span>

          <form
            onSubmit={handleCheck}
            className="w-full flex flex-col sm:flex-row border border-gray-200 m-5 rounded shadow"
          >

            <input
              type="text"
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
              className="flex-1 pl-5 py-2.5"
              placeholder="Your shortened URL"
              required
            />

            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white p-2 rounded-r cursor-pointer"
            >
              Check Short URL
            </button>

          </form>

          {originalUrl && (
            <div className="w-full flex flex-col items-start gap-2 mt-3">

              <span className="font-semibold text-gray-600">
                Destination URL:
              </span>

              <span className="break-all">
                {originalUrl}
              </span>

            </div>
          )}

          <div className="w-full flex flex-col items-start gap-2 mt-3">
            <span>
              Example: shorturl.at/AbCdE
            </span>
          </div>

          <span className="flex flex-col items-center text-center mt-2">
            <span>
              * URL unshortener shows the next page that a short URL will
              redirect to
            </span>
          </span>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default UnshortenUrl;