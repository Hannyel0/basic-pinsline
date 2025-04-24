// app/page.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      <main className="mt-20 container mx-auto px-4 py-16 mb-35">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Bookings made easy &amp; convenient for everyone</h1>
            <p className="text-xl mb-6 text-gray-600">
              Pinsline is a booking platform designed to help people easily find and schedule appointments with local service providers. Whether you&apos;re a freelancer, technician, or independent professional, our mobile and web apps make it simple for clients to discover your services, view availability, compare prices, and book appointments—all in just a few taps.            
            </p>
            <Link href="/working">
              <button className="bg-[#FF375C] cursor-pointer text-white px-6 py-3 rounded-md font-black hover:bg-[#e52447] transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/main-page-svg.svg"
              alt="Trading illustration"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </main>
      <Footer />
    </main>
  );
}
