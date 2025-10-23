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

              {/* Search Bar */}
              <div className="flex-1 max-w-lg mx-8">
                <div className="relative">
                  <input type="text" placeholder="Cari acara atau teman..." className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex items-center space-x-6">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Event
                </a>
                <div className="w-px h-4 bg-gray-300"></div>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  About Us
                </a>
                <div className="w-px h-4 bg-gray-300"></div>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Contact
                </a>
                <div className="w-px h-4 bg-gray-300"></div>
                <a href="#" className="text-gray-700 hover:text-gray-900">
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
        <section className="py-8 bg-gray-50">
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
      </div>
    </>
  );
}
