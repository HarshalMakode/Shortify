import { useState } from 'react'

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-cyan-40'>

      <header className='flex justify-center items-baseline w-full px-3'>
        <span class="text-6xl font-bold text-blue-400 px-2 py-10">Shortify</span>
        <span className='font-bold '>by</span>
        <span className='ml-1 font-bold text-blue-600 '>MrHypix</span>
      </header>

      <main className='flex flex-col items-center p-4 gap-5'>

        <section className='w-full max-w-3xl flex flex-col items-center bg-white py-5 rounded-2xl border border-mist-300 shadow-lg p-13'>
          <span className='text-4xl font-bold text-gray-600'>Paste the URL to be shortened</span>
          <form action="submit" className='w-full flex border border-gray-200 m-5 rounded shadow'>
            <input type="text" className='flex-1 pl-5 py-2.5' placeholder='Enter the link' />
            <button className='bg-blue-500 text-white p-2 rounded-r'>Shorten URL</button>
          </form>
          <span className='flex flex-col items-center'>
            <span>Shortify is a free tool to shorten URLs and generate short links</span>
            <span>URL shortener allows to create a shortened link making it easy to share</span>
          </span>
        </section>

        <section className='w-full max-w-3xl flex flex-col items-center bg-white py-5 rounded-2xl border border-mist-300 shadow-lg p-10 gap-5'>
          <span className='text-2xl font-bold text-gray-600'>Want More? Try Premium Features!</span>
          <span className='flex flex-col items-center'>
            <span>Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes,</span>
            <span>browser extension, app integrations and support. Start Free</span>
          </span>
          <button className='bg-blue-500 text-white py-3 px-5 rounded'>Create Account</button>
        </section>

        <section>
          <span>
            <span>Simple and fast URL shortener!</span>
            <span>ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and any domain name. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check how many clicks it received.</span>
          </span>
        </section>
        
        <section>
          <span>
            <span>Shorten, share and track</span>
            <span>Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with our click counter.</span>
          </span>
        </section>

      </main>
    </div>
  )
}

export default App;
