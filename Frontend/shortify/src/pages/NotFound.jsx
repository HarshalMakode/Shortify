import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">
      <Header />

      <main className="flex flex-col items-center gap-5 mx-6">
        <section className="w-full max-w-3xl flex flex-col items-center bg-white py-10 rounded-2xl border border-mist-300 shadow-lg p-13">
          <span className="text-7xl font-bold text-gray-600">404</span>

          <span className="text-2xl font-semibold text-gray-600 mt-3">
            Page Not Found
          </span>

          <span className="text-gray-500 text-center mt-2">
            Sorry, the page you are looking for does not exist.
          </span>

          <button
            type="button"
            onClick={() => navigate("/", { replace: true })}
            className="mt-5 bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white p-2 rounded cursor-pointer"
          >
            Go to Shortify
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
