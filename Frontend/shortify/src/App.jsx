import { useState } from 'react'
import images from "./constants/images"

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-cyan-40'>
      <header className='flex justify-center items-baseline w-full px-3'>
        <a href='/' class="text-6xl font-bold text-blue-400 px-2 py-10">Shortify</a>
        <span className='font-bold '>by</span>
        <span className='ml-1 font-bold text-blue-500 '>MrHypix</span>
      </header>

      <main className='flex flex-col items-center gap-5 mx-6'>
        <section className='w-full max-w-3xl flex flex-col items-center bg-white py-5 rounded-2xl border border-mist-300 shadow-lg p-13'>
          <span className='text-4xl font-bold text-gray-600'>Paste the URL to be shortened</span>

          <form action="submit" className='w-full flex border border-gray-200 m-5 rounded shadow'>
            <input type="text" className='flex-1 pl-5 py-2.5' placeholder='Enter the link' />
            <button className='bg-blue-400 font-semibold text-white p-2 rounded-r'>Shorten URL</button>
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

          <button className='bg-blue-400 font-semibold text-white py-3 px-5 rounded'>Create Account</button>

        </section>

        <section className='w-full max-w-3xl flex flex-col'>
            <span className='text-[25px] font-bold text-gray-600'>Simple and fast URL shortener!</span>
            <span>ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and any domain name. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check how many clicks it received.</span>
        </section>
        
        <section className='w-full max-w-3xl flex flex-col'>
            <span className='text-[25px] font-bold text-gray-600'>Shorten, share and track</span>
            <span>Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with our click counter.</span>
        </section>

        <div className='max-w-4xl grid grid-cols-3 gap-5 mt-5'>
          <div className='flex flex-col items-center text-center'>
            <img src={images.like} className='w-20 h-20'/>
            <span className='text-xl font-bold text-gray-600'>Easy</span>
            <span>ShortURL is easy and fast, enter the long link to get your shortened link</span>
          </div>

          <div className='flex flex-col items-center text-center'>
            <img src={images.url}/>
            <span className='text-xl font-bold text-gray-600'>Shortened</span>
            <span>Use any link, no matter what size, ShortURL always shortens</span>
          </div>

          <div className='flex flex-col items-center text-center'>
            <img src={images.secure}/>
            <span className='text-xl font-bold text-gray-600'>Secure</span>
            <span>It is fast and secure, our service has HTTPS protocol and data encryption</span>
          </div>

          <div className='flex flex-col items-center text-center'>
            <img src={images.statistics}/>
            <span className='text-xl font-bold text-gray-600'>Statistics</span>
            <span>Check the number of clicks that your shortened URL received</span>
          </div>

          <div className='flex flex-col items-center text-center'>
            <img src={images.unique}/>
            <span className='text-xl font-bold text-gray-600'>Reliable</span>
            <span>All links that try to disseminate spam, viruses and malware are deleted</span>
          </div>

          <div className='flex flex-col items-center text-center'>
            <img src={images.responsive}/>
            <span className='text-xl font-bold text-gray-600'>Devices</span>
            <span>Compatible with smartphones, tablets and desktop</span>
          </div>

        </div>
      </main>

      <div className='w-full bg-blue-400 h-1 mt-10'></div>
      <footer className='w-full px-10 py-5 flex flex-col bg-[#333]'>
        <span className='flex justify-center text-white'>© 2026 ShortUrl.at - Tool to shorten a long link</span>
        <span className='flex justify-center text-white mb-2'>Powered by <span className='ml-1 font-semibold text-blue-500'>MrHypix</span></span>
        <div className='flex flex-col lg:flex-row font-semibold justify-center text-blue-500 divide-y lg:divide-y-0 lg:divide-x divide-black'>
          <a className='px-3 py-2' href="/">ShortURL</a>
          <a className='px-3 py-2' href="">URL Click Counter</a>
          <a className='px-3 py-2' href="">Unshorten URL</a>
          <a className='px-3 py-2' href="">Report Malicious URL</a>
          <a className='px-3 py-2' href="">Terms of Service</a>
          <a className='px-3 py-2' href="">Privacy</a>
          <a className='px-3 py-2' href="">Contact</a>
        </div>
      </footer>

    </div>
  )
}

export default App;
