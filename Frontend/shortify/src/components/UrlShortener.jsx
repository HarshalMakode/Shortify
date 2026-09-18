function UrlShortener() {
  return (
    <section className="w-full max-w-3xl flex flex-col items-center bg-white py-5 rounded-2xl border border-mist-300 shadow-lg p-13">

      <span className="text-4xl font-bold text-gray-600">
        Paste the URL to be shortened
      </span>

      <form className="w-full flex flex-col sm:flex-row border border-gray-200 m-5 rounded shadow">
        <input
          type="text"
          className="flex-1 pl-5 py-2.5"
          placeholder="Enter the link"
        />

        <button className="bg-blue-400 font-semibold text-white p-2 rounded-r">
          Shorten URL
        </button>
      </form>

      <span className="flex flex-col items-center text-center">
        <span>
          Shortify is a free tool to shorten URLs and generate short links
        </span>

        <span>
          URL shortener allows to create a shortened link making it easy to share
        </span>
      </span>

    </section>
  );
}

export default UrlShortener;