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
      <div className={`min-h-screen bg-white transition-opacity duration-500 ${loading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">EventConnect</h1>
              </div>

              {/* Search Bar - Centered */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md">
                  <input 
                    type="text" 
                    placeholder="Cari acara atau teman..." 
                    className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm" 
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
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
                <div className="w-px h-4 bg-gray-300"></div>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '16px'}}>
                  About Us
                </a>
                <div className="w-px h-4 bg-gray-300"></div>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '16px'}}>
                  Contact
                </a>
                <div className="w-px h-4 bg-gray-300"></div>
                <a href="#" className="text-black hover:text-gray-800 transition-colors" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px', fontWeight: 'bold'}}>
                  Sign In
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 bg-gray-100">
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
        <section className="py-16 bg-white">
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
        <section className="py-8 bg-gray-30">
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
        <section id="event-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event Card 1 */}
              <div className="event-card">
                <div className="event-image">
                  <Image src="/Photo/Frame 6.png" alt="HacticNight Event" fill className="object-cover" />
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
                  <Image src="/Photo/Frame 12.png" alt="SoulSync Night Event" fill className="object-cover" />
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
                  <Image src="/Photo/Frame 13.png" alt="EchoBeat Fest Event" fill className="object-cover" />
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
                  <Image src="/Photo/Frame 14.png" alt="BassDrop Culture Event" fill className="object-cover" />
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
                  <Image src="/Photo/Frame 15.png" alt="NeonVerse Party Event" fill className="object-cover" />
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
                  <Image src="/Photo/Frame 16.png" alt="RhythmRush Event" fill className="object-cover" />
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
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Footer Title */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white">Event Connect</h2>
              <div className="w-full h-px bg-white mt-4"></div>
            </div>

            {/* Footer Content */}
            <div className="flex flex-col md:flex-row">
              {/* Column 1 - Information Links */}
              <div className="flex-1 space-y-4 pr-8">
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Syarat & Ketentuan</a>
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">FAQ</a>
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Kebijakan Privasi</a>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-32 bg-white mx-4"></div>

              {/* Column 2 - Event Categories */}
              <div className="flex-1 space-y-4 px-4">
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Concert</a>
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Workshop</a>
                <a href="#" className="block text-white hover:text-gray-300 transition-colors">Art Gallery</a>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-32 bg-white mx-4"></div>

              {/* Column 3 - Contact Information */}
              <div className="flex-1 space-y-4 px-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white">+628712345678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white">eventconnect@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                  <span className="text-white">@eveeenttt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-white">@eveeenttt</span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-32 bg-white mx-4"></div>

              {/* Column 4 - QR Code */}
              <div className="flex-1 flex flex-col items-center space-y-4 pl-4">
                <div className="w-24 h-24 bg-white p-2 rounded">
                  {/* QR Code placeholder - you can replace this with an actual QR code image */}
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-0.5">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-white text-sm font-medium">SCAN ME</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
