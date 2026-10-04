import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ReportUrl() {
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(answer) !== 8) {
      alert("Incorrect answer");
      return;
    }

    console.log({
      url,
      comment,
    });
  };

  const handleClean = () => {
    setUrl("");
    setComment("");
    setAnswer("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">

      <Header />

      <main className="flex flex-col mx-6 items-center">
        <section className="w-full max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md p-7">

           <h1 className="text-4xl font-bold text-gray-600 mb-2">
          Report Malicious URL
        </h1>

        <p className=" text-gray-700 leading-relaxed mb-6">
          Use the form to report URLs suspected of spam, phishing, or
          malware. Short URLs which redirect to malicious pages or download
          dangerous files are deleted.
        </p>

          <form onSubmit={handleSubmit}>

            <div className="flex flex-col gap-1 mb-5 max-w-md">
              <label className="text-xl">
                Invalid or malicious URL
              </label>

              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="shorturl.at/AbCdE"
                className="border border-gray-400 px-3 py-2 text-lg outline-none focus:border-blue-400"
                required
              />
            </div>

            <div className="flex flex-col gap-1 mb-5 max-w-md">
              <label className="text-xl">
                Comment
              </label>

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="h-25 border border-gray-400 px-3 py-2 text-lg outline-none focus:border-blue-400 resize-y"
                required
              />
            </div>

            <div className="flex items-center gap-2 mb-8">
              <span className="text-2xl">
                7 + 1 =
              </span>

              <input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-12 h-12 border-2 border-gray-800 rounded px-2 text-lg outline-none"
                required
              />
            </div>

            <div className="flex justify-center gap-1 max-w-md">

              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white px-5 py-2.5 rounded cursor-pointer"
              >
                Send
              </button>

              <button
                type="button"
                onClick={handleClean}
                className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white px-5 py-2.5 rounded cursor-pointer"
              >
                Clean
              </button>

            </div>

          </form>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default ReportUrl;