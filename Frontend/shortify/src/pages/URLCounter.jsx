import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Counter from '../components/Counter';

function URLCounter() {
  return (
    <div className="min-h-screen flex flex-col bg-cyan-40">
      
      <Header />

      <main className="flex flex-col items-center gap-5 mx-6">

        <Counter />

      </main>

      <Footer />

    </div>
  )
}

export default URLCounter
