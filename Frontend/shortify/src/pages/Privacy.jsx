import Header from "../components/Header";
import Footer from "../components/Footer";

function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">

      <Header />

      <main className="flex flex-col items-center gap-5 mx-6">

        <section className="w-full max-w-4xl bg-white rounded-2xl border border-mist-300 shadow-lg p-8">

          <h1 className="text-4xl font-bold text-gray-600 mb-6">
            Privacy Policy
          </h1>

          <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">

            <p>
              This Privacy Policy explains what information Shortify may
              collect and how that information is used when you use our
              URL shortening services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Information Collected
              </h2>

              <p>
                Shortify may store information required to provide its
                URL shortening service. This may include the original URL,
                the generated short URL, and the number of clicks received
                by a shortened URL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Use of Information
              </h2>

              <p>
                The information stored by Shortify is used to create and
                manage shortened URLs, redirect users to their destination
                URLs, and provide click statistics for shortened URLs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Information Sharing
              </h2>

              <p>
                Shortify does not sell personal information to third parties.
                Information may only be disclosed when required to operate
                the service or when required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Security
              </h2>

              <p>
                We take reasonable measures to protect information stored
                by the service. However, no method of storing or transmitting
                information over the internet can be guaranteed to be
                completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                URL Data
              </h2>

              <p>
                When you create a shortened URL, Shortify stores the original
                URL together with its generated short code. Clicks on the
                shortened URL may also be recorded to provide click-counting
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Cookies and Tracking
              </h2>

              <p>
                Shortify may use cookies or similar technologies if they are
                required for the operation, security, or improvement of the
                service. Any future advertising or analytics technologies
                will be subject to the applicable privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Privacy Policy Changes
              </h2>

              <p>
                This Privacy Policy may be updated from time to time.
                Changes will be reflected on this page when the policy
                is updated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Contact
              </h2>

              <p>
                If you have questions regarding this Privacy Policy or
                Shortify's services, please contact the Shortify team.
              </p>
            </section>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Privacy;