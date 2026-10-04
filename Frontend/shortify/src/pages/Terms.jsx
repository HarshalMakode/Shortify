import Header from "../components/Header";
import Footer from "../components/Footer";

function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">

      <Header />

      <main className="flex flex-col items-center gap-5 mx-6 my-8">

        <section className="w-full max-w-4xl bg-white rounded-2xl border border-mist-300 shadow-lg p-8">

          <h1 className="text-4xl font-bold text-gray-600 mb-6">
            Terms of Service
          </h1>

          <div className="flex flex-col gap-6 text-gray-600 leading-relaxed">

            <p>
              These Terms of Service establish the rules for accessing and
              using Shortify and the URL shortening services provided through
              the application. By using Shortify, you agree to these terms.
            </p>

            <p>
              Please read these terms carefully before using the service. If
              you do not agree with these terms, you should not use Shortify.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                URL Shortening Service
              </h2>

              <p>
                Shortify is a URL shortening service that converts a long URL
                into a shorter link that can be shared with other users.
                Shortened URLs are stored together with their corresponding
                original URLs so that users can be redirected to the
                destination URL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Conditions of Use
              </h2>

              <p className="mb-3">
                You agree to use Shortify only for lawful purposes and in a
                responsible manner.
              </p>

              <p>
                You must not use Shortify to create or distribute shortened
                URLs that lead to malicious, fraudulent, abusive, illegal, or
                harmful content.
              </p>

              <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
                <li>
                  Phishing pages or fraudulent websites.
                </li>

                <li>
                  Malware, viruses, or other malicious software.
                </li>

                <li>
                  Content that violates applicable laws or regulations.
                </li>

                <li>
                  Content that infringes the intellectual property or other
                  rights of third parties.
                </li>

                <li>
                  Content intended to harm, deceive, or abuse other users.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Short URL Availability
              </h2>

              <p>
                Shortify does not guarantee that a shortened URL will remain
                available indefinitely. Short URLs may become unavailable if
                the service is discontinued, the URL is removed, or action is
                required because of a violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Click Tracking
              </h2>

              <p>
                Shortify provides click-counting functionality for shortened
                URLs. The number of visits to a shortened URL may be recorded
                and displayed as part of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Prohibited Use
              </h2>

              <p>
                You may not use Shortify to distribute spam, malicious links,
                deceptive content, or links intended to compromise the
                security or privacy of other users.
              </p>

              <p className="mt-3">
                Shortify may restrict or remove shortened URLs that are found
                to violate these terms or create a risk to the service or its
                users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Disclaimer
              </h2>

              <p>
                Shortify is provided on an "as is" and "as available" basis.
                We do not guarantee that the service will always be available,
                uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Limitation of Liability
              </h2>

              <p>
                To the extent permitted by applicable law, Shortify and its
                developers will not be responsible for losses or damages
                resulting from the use of shortened URLs, destination websites,
                interruptions of the service, or inability to access the
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Third-Party Websites
              </h2>

              <p>
                Shortened URLs may redirect users to websites operated by
                third parties. Shortify does not control those websites or
                their content. Users should review the terms and privacy
                policies of third-party websites before using them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Terms Updates
              </h2>

              <p>
                Shortify may update these Terms of Service from time to time.
                Updated terms will be published on this page and will apply
                after they are posted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Contact
              </h2>

              <p>
                If you have questions about these Terms of Service, you can
                contact the Shortify team through the Contact page.
              </p>
            </section>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Terms;