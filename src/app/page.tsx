import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image src="/Photo/Frame 6.png" alt="Concert background" fill className="object-cover" priority />
              <div className="absolute inset-0 hero-gradient"></div>
            </div>

            {/* Text Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">Never Go to Events Alone Again - Find Your Perfect Event Companion</h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                EventConnect menghubungkan Anda dengan orang-orang yang memiliki minat yang sama untuk menjelajahi setiap festival, konser, pameran, dan acara lainnya. Temukan teman perjalanan yang sempurna dan maksimalkan pengalaman acara
                Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News and Article Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">NEWS AND ARTICLE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Article Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="relative h-100">
                <Image src="/Photo/Frame 12.png" alt="Bandung event" fill className="object-cover" />

                {/* Central texture block */}
                <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                  <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                    <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover rounded-lg" />
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="relative h-100">
                <Image src="/Photo/Frame 13.png" alt="Yogyakarta event" fill className="object-cover" />

                {/* Central texture block */}
                <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                  <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                    <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover rounded-lg" />
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="relative h-100">
                <Image src="/Photo/Frame 14.png" alt="Jakarta event" fill className="object-cover" />

                {/* Central texture block */}
                <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                  <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                    <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover rounded-lg" />
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="relative h-100">
                <Image src="/Photo/Frame 15.png" alt="Surabaya event" fill className="object-cover" />

                {/* Central texture block */}
                <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                  <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                    <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover rounded-lg" />
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

            {/* Article Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="relative h-100">
                <Image src="/Photo/Frame 16.png" alt="Bali event" fill className="object-cover" />

                {/* Central texture block */}
                <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                  <div className="relative bg-white bg-opacity-90 p-6 h-64 overflow-hidden">
                    <Image src="/Photo/texture-artikel.png" alt="Texture overlay" fill className="object-cover rounded-lg" />
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
          <div className="scroll-text whitespace-nowrap text-4xl font-bold text-gray-900">
            WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT - WORKSHOP - ART - CONCERT
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {/* Main Image (Color) */}
            <div className="flex-shrink-0 w-80 h-60 relative">
              <Image src="/Photo/Frame 7.png" alt="Main event image" fill className="object-cover rounded-lg" />
            </div>

            {/* Secondary Images (Grayscale) */}
            <div className="flex-shrink-0 w-80 h-60 relative">
              <Image src="/Photo/Frame 8.png" alt="Event crowd" fill className="object-cover rounded-lg grayscale" />
            </div>
            <div className="flex-shrink-0 w-80 h-60 relative">
              <Image src="/Photo/Frame 9.png" alt="Event crowd" fill className="object-cover rounded-lg grayscale" />
            </div>
            <div className="flex-shrink-0 w-80 h-60 relative">
              <Image src="/Photo/Frame 10.png" alt="Event crowd" fill className="object-cover rounded-lg grayscale" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
