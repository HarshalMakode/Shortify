import Header from "../components/Header";
import UrlShortener from "../components/UrlShortener";
import PremiumSection from "../components/PremiumSection";
import InfoSection from "../components/InfoSection";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">
      
      <Header />

      <main className="flex flex-col items-center gap-5 mx-6">

        <UrlShortener />

        <PremiumSection />

        <InfoSection title="Simple and fast URL shortener!">
          ShortURL allows to shorten long links from Instagram, Facebook,
          YouTube, Twitter, LinkedIn, WhatsApp, TikTok, blogs and any domain
          name. Just paste the long URL and click the Shorten URL button.
        </InfoSection>

        <InfoSection title="Shorten, share and track">
          Your shortened URLs can be used in publications, documents,
          advertisements, blogs, forums, instant messages, and other
          locations. Track statistics for your business and projects by
          monitoring the number of hits from your URL with our click counter.
        </InfoSection>

        <Features />

      </main>

      <Footer />

    </div>
  );
}

export default Home;