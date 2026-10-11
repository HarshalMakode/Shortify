import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:8081/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Unable to send your message.");
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
        return;
      }

      setStatus(data.message);
      setName("");
      setEmail("");
      setMessage("");
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    } catch (error) {
      setStatus("Unable to connect to the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setMessage("");
    setCaptchaToken(null);
    setStatus("");
    captchaRef.current?.resetCaptcha();
  };

  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">
      <Header />

      <main className="flex flex-col items-center mx-6 my-8">
        <section className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-600 mb-4">
            Contact our Team
          </h1>

          <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md p-7">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 mb-5">
                <label className="text-xl">Name</label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full max-w-md border border-gray-400 px-3 py-2 text-lg outline-none focus:border-blue-400"
                  required
                />
              </div>

              <div className="flex flex-col gap-1 mb-5">
                <label className="text-xl">E-mail</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-md border border-gray-400 px-3 py-2 text-lg outline-none focus:border-blue-400"
                  required
                />
              </div>

              <div className="flex flex-col gap-1 mb-5">
                <label className="text-xl">Message</label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full max-w-md h-25 border border-gray-400 px-3 py-2 text-lg outline-none focus:border-blue-400 resize-y"
                  required
                />
              </div>

              <div className="mb-8">
                <HCaptcha
                  ref={captchaRef}
                  sitekey="311a7fd0-0412-4d06-85da-3948fe087906"
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken(null)}
                />
              </div>

              {status && (
                <p className="mb-4 text-sm" role="status">
                  {status}
                </p>
              )}

              <div className="flex justify-center gap-1 max-w-md">
                <button
                  type="submit"
                  disabled={!captchaToken || submitting}
                  className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white px-5 py-2.5 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send"}
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="bg-blue-400 hover:bg-blue-500 transition duration-200 font-semibold text-white px-5 py-2.5 rounded cursor-pointer"
                >
                  Clean
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
