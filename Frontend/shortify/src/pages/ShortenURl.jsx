import React from 'react';
import Header from "../components/Header";
import ShortenedUrl from "../components/ShortenedUrl";
import Footer from "../components/Footer";

export default function ShortenUrl() {
  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">
      
      <Header />

      <main className="flex flex-col items-center gap-5 mx-6">

        <ShortenedUrl />

      </main>

      <Footer />

    </div>
  )
}
