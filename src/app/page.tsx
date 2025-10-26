"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SplashScreen from "../components/SplashScreen";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSplashComplete = () => {
    console.log("Splash screen completed, transitioning to main page...");
    setLoading(false);
  };

  // splash disabled by default (loading=false)

  // Reset scroll position after transition from splash screen
  useEffect(() => {
    if (!loading) {
      // Small delay to ensure transition is complete
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [loading]);

  return (
    <>
      {/* Splash Screen */}
      {loading && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main Content - Scrollable only when splash screen is gone */}
      <div className={`min-h-screen transition-opacity duration-500 ${loading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`} style={{backgroundColor: '#E8E8E8'}}>
        {/* Header */}
        <header className="shadow-sm border-b" style={{backgroundColor: '#E8E8E8'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">EventConnect</h1>
              </div>

              {/* Navigation */}
              <nav className="flex items-center space-x-6">
                <a 
                  href="#event-section" 
                  className="text-gray-500 hover:text-gray-700 transition-colors" 
                  style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '16px'}}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('event-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Event
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '16px'}}>
                  About Us
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '16px'}}>
                  Contact
                </a>
                <a href="#" className="text-black hover:text-gray-800 transition-colors" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px', fontWeight: 'bold'}}>
                  Sign In
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20" style={{backgroundColor: '#E8E8E8'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <Image src="/Photo/Foto-Landing-Page.png" alt="Concert background" fill className="object-cover" priority />
              <div className="absolute inset-0 hero-gradient"></div>

              {/* Text Content inside the image */}
              <div className="absolute bottom-8 left-8 right-8 lg:right-auto lg:w-1/2 text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Never Go to Events Alone Again - Find Your Perfect Event Companion</h1>
                <p className="text-base md:text-lg text-white leading-relaxed">
                  EventConnect menghubungkan Anda dengan orang-orang yang memiliki minat yang sama untuk menjelajahi setiap festival, konser, pameran, dan acara lainnya. Temukan teman perjalanan yang sempurna dan maksimalkan pengalaman
                  acara Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* News and Article Section */}
        <section className="py-16" style={{backgroundColor: '#E8E8E8'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="news-heading text-gray">NEWS AND ARTICLE</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Article Card 1 */}
              <div className="bg-white shadow-md overflow-hidden card-hover article-card">
                <div className="relative h-100">
                  <span className="article-number">1</span>
                  <Image src="/Photo/Artikel1.png" alt="Bandung event" fill className="object-cover" />

                  {/* Central texture block */}
                  <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                    <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                      <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover" />
                      <div className="relative z-10 h-full flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-800 flex-1 overflow-hidden line-clamp">Bandung – Ribuan penonton padati konser Suara Senja Vol. 3, menampilkan Fourtwnty dan Danilla.</h3>
                        <a href="#" className="text-black hover:text-gray-700 font-medium text-sm mt-2">
                          Find Out More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Card 2 */}
              <div className="bg-white shadow-md overflow-hidden card-hover article-card">
                <div className="relative h-100">
                  <span className="article-number">2</span>
                  <Image src="/Photo/Artikel2.png" alt="Yogyakarta event" fill className="object-cover" />

                  {/* Central texture block */}
                  <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                    <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                      <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover" />
                      <div className="relative z-10 h-full flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-800 flex-1 overflow-hidden line-clamp">Yogyakarta – Anak muda antusias ikuti pelatihan batik pakai aplikasi desain grafis.</h3>
                        <a href="#" className="text-black hover:text-gray-700 font-medium text-sm mt-2">
                          Find Out More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Card 3 */}
              <div className="bg-white shadow-md overflow-hidden card-hover article-card">
                <div className="relative h-100">
                  <span className="article-number">3</span>
                  <Image src="/Photo/Artikel3.png" alt="Jakarta event" fill className="object-cover" />

                  {/* Central texture block */}
                  <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                    <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                      <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover" />
                      <div className="relative z-10 h-full flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-800 flex-1 overflow-hidden line-clamp">Jakarta – Galeri Nasional pamerkan karya seniman jalanan, berlangsung hingga 15 Juli.</h3>
                        <a href="#" className="text-black hover:text-gray-700 font-medium text-sm mt-2">
                          Find Out More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Card 4 */}
              <div className="bg-white shadow-md overflow-hidden card-hover article-card">
                <div className="relative h-100">
                  <span className="article-number">4</span>
                  <Image src="/Photo/Artikel4.png" alt="Surabaya event" fill className="object-cover" />

                  {/* Central texture block */}
                  <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                    <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                      <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover" />
                      <div className="relative z-10 h-full flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-800 flex-1 overflow-hidden line-clamp">Surabaya – Konser jazz galang dana beasiswa, tampil Dira Sugandi dan Barry Likumahuwa.</h3>
                        <a href="#" className="text-black hover:text-gray-700 font-medium text-sm mt-2">
                          Find Out More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* halo */}
              {/* Article Card 5 */}
              <div className="bg-white shadow-md overflow-hidden card-hover article-card">
                <div className="relative h-100">
                  <span className="article-number">5</span>
                  <Image src="/Photo/Artikel5.png" alt="Bali event" fill className="object-cover" />

                  {/* Central texture block */}
                  <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                    <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                      <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover" />
                      <div className="relative z-10 h-full flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-800 flex-1 overflow-hidden line-clamp">Bali – Fotografer dari berbagai negara belajar motret alam Ubud selama 3 hari.</h3>
                        <a href="#" className="text-black hover:text-gray-700 font-medium text-sm mt-2">
                          Find Out More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Categories */}
        <section className="py-8" style={{backgroundColor: '#E8E8E8'}}>
          <div className="overflow-hidden">
            <div className="scroll-text text-4xl font-bold text-gray-900">
              <span>WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT</span>
              <span>WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT</span>
            </div>
            <div className="scroll-text1 text-4xl font-bold text-gray-900">
              <span>WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT</span>
              <span>WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT</span>
            </div>
          </div>
        </section>

        {/* Event Section */}
        <section id="event-section" className="py-16" style={{backgroundColor: '#E8E8E8'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="flex justify-center mb-12">
              <div className="relative" style={{width: '495px', height: '39px'}}>
                <input 
                  type="text" 
                  placeholder="Cari acara atau teman..." 
                  className="w-full h-full pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-sm" 
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event Card 1 */}
              <div className="event-card">
                <div className="event-image">
                  <Image src="/Photo/Frame 6.png" alt="HacticNight Event" fill className="object-cover" style={{filter: 'none', opacity: 1}} />
                </div>
                <div className="event-content">
                  <h3 className="event-title">HacticNight</h3>
                  <p className="event-subtitle">One Night, Infinite Vibes.</p>
                  
                  <div className="event-info-box">Sabtu, 24 Agustus 2005</div>
                  <div className="event-info-box">The Concert Hall, Yogyakarta</div>
                  
                  <div className="event-buttons">
                    <button className="event-btn event-btn-read-more">Read More</button>
                    <button className="event-btn event-btn-add">Add</button>
                  </div>
                </div>
              </div>

              {/* Event Card 2 */}
              <div className="event-card">
                <div className="event-image">
                  <Image src="/Photo/Frame 12.png" alt="SoulSync Night Event" fill className="object-cover" style={{filter: 'none', opacity: 1}} />
                </div>
                <div className="event-content">
                  <h3 className="event-title">SoulSync Night</h3>
                  <p className="event-subtitle">One Night, Infinite Vibes.</p>
                  
                  <div className="event-info-box">Sabtu, 24 Agustus 2005</div>
                  <div className="event-info-box">The Concert Hall, Yogyakarta</div>
                  
                  <div className="event-buttons">
                    <button className="event-btn event-btn-read-more">Read More</button>
                    <button className="event-btn event-btn-add">Add</button>
                  </div>
                </div>
              </div>

              {/* Event Card 3 */}
              <div className="event-card">
                <div className="event-image">
                  <Image src="/Photo/Frame 13.png" alt="EchoBeat Fest Event" fill className="object-cover" style={{filter: 'none', opacity: 1}} />
                </div>
                <div className="event-content">
                  <h3 className="event-title">EchoBeat Fest</h3>
                  <p className="event-subtitle">One Night, Infinite Vibes.</p>
                  
                  <div className="event-info-box">Sabtu, 24 Agustus 2005</div>
                  <div className="event-info-box">The Concert Hall, Yogyakarta</div>
                  
                  <div className="event-buttons">
                    <button className="event-btn event-btn-read-more">Read More</button>
                    <button className="event-btn event-btn-add">Add</button>
                  </div>
                </div>
              </div>

              {/* Event Card 4 */}
              <div className="event-card">
                <div className="event-image">
                  <Image src="/Photo/Frame 14.png" alt="BassDrop Culture Event" fill className="object-cover" style={{filter: 'none', opacity: 1}} />
                </div>
                <div className="event-content">
                  <h3 className="event-title">BassDrop Culture</h3>
                  <p className="event-subtitle">One Night, Infinite Vibes.</p>
                  
                  <div className="event-info-box">Sabtu, 24 Agustus 2005</div>
                  <div className="event-info-box">The Concert Hall, Yogyakarta</div>
                  
                  <div className="event-buttons">
                    <button className="event-btn event-btn-read-more">Read More</button>
                    <button className="event-btn event-btn-add">Add</button>
                  </div>
                </div>
              </div>

              {/* Event Card 5 */}
              <div className="event-card">
                <div className="event-image">
                  <Image src="/Photo/Frame 15.png" alt="NeonVerse Party Event" fill className="object-cover" style={{filter: 'none', opacity: 1}} />
                </div>
                <div className="event-content">
                  <h3 className="event-title">NeonVerse Party</h3>
                  <p className="event-subtitle">One Night, Infinite Vibes.</p>
                  
                  <div className="event-info-box">Sabtu, 24 Agustus 2005</div>
                  <div className="event-info-box">The Concert Hall, Yogyakarta</div>
                  
                  <div className="event-buttons">
                    <button className="event-btn event-btn-read-more">Read More</button>
                    <button className="event-btn event-btn-add">Add</button>
                  </div>
                </div>
              </div>

              {/* Event Card 6 */}
              <div className="event-card">
                <div className="event-image">
                  <Image src="/Photo/Frame 16.png" alt="RhythmRush Event" fill className="object-cover" style={{filter: 'none', opacity: 1}} />
                </div>
                <div className="event-content">
                  <h3 className="event-title">RhythmRush</h3>
                  <p className="event-subtitle">One Night, Infinite Vibes.</p>
                  
                  <div className="event-info-box">Sabtu, 24 Agustus 2005</div>
                  <div className="event-info-box">The Concert Hall, Yogyakarta</div>
                  
                  <div className="event-buttons">
                    <button className="event-btn event-btn-read-more">Read More</button>
                    <button className="event-btn event-btn-add">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-black py-12" style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Column 1 - Event Connect */}
              <div className="space-y-4">
                <h3 className="font-bold" style={{color: '#CDCDCD', fontSize: '20px'}}>Event Connect</h3>
                <p className="leading-relaxed" style={{color: '#CDCDCD', fontSize: '14px'}}>
                  Welcome to EventConnect, platform yang mempertemukan penonton event dengan teman baru untuk menikmati momen bersama.
                </p>
                <div className="flex space-x-4">
                  {/* Instagram Icon */}
                  <svg className="w-6 h-6" fill="#CDCDCD" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {/* X (Twitter) Icon */}
                  <svg className="w-6 h-6" fill="#CDCDCD" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </div>

              {/* Column 2 - Services */}
              <div className="space-y-4">
                <h3 className="font-bold" style={{color: '#CDCDCD', fontSize: '20px'}}>Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:opacity-70 transition-opacity" style={{color: '#CDCDCD', fontSize: '14px'}}>Concert</a></li>
                  <li><a href="#" className="hover:opacity-70 transition-opacity" style={{color: '#CDCDCD', fontSize: '14px'}}>Workshop</a></li>
                  <li><a href="#" className="hover:opacity-70 transition-opacity" style={{color: '#CDCDCD', fontSize: '14px'}}>Art Gallery</a></li>
                </ul>
              </div>

              {/* Column 3 - Contact Us */}
              <div className="space-y-4">
                <h3 className="font-bold" style={{color: '#CDCDCD', fontSize: '20px'}}>Contact Us</h3>
                <div className="space-y-2">
                  <p style={{color: '#CDCDCD', fontSize: '14px'}}>+628123456789</p>
                  <p className="underline" style={{color: '#CDCDCD', fontSize: '14px'}}>EvenConnect@gmail.com</p>
                  <p style={{color: '#CDCDCD', fontSize: '14px'}}>Jl. Megatrone, No 122</p>
                </div>
              </div>

              {/* Column 4 - Subscribe */}
              <div className="space-y-4">
                <h3 className="font-bold" style={{color: '#CDCDCD', fontSize: '20px'}}>Subscribe</h3>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    className="flex-1 px-3 py-2 text-gray-500 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    style={{fontSize: '14px'}}
                  />
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition-colors" style={{fontSize: '14px'}}>
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px mb-6" style={{backgroundColor: '#333232'}}></div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0" style={{color: '#CDCDCD', fontSize: '14px'}}>
                Copyright © 2025 EventConnect
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:opacity-70 transition-opacity" style={{color: '#CDCDCD', fontSize: '14px'}}>Term of Use</a>
                <div className="w-px h-4" style={{backgroundColor: '#333232'}}></div>
                <a href="#" className="hover:opacity-70 transition-opacity" style={{color: '#CDCDCD', fontSize: '14px'}}>Privacy policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
