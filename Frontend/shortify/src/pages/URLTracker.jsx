import Header from "../components/Header";
import Footer from "../components/Footer";
import Tracker from '../components/Tracker';

function URLTracker() {
  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">
      
      <Header />

      <main className="flex flex-col items-center gap-5 mx-6">

        <Tracker />

      </main>

      <Footer />

    </div>
  )
}

export default URLTracker
