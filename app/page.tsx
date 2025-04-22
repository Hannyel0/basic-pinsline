// app/page.tsx
import Image from "next/image";
import {
  HomeIcon,
  CalendarDaysIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Dark overlay */} 
      <div className="absolute inset-0 bg-black/30" />

      {/* White rounded container */}
      <div className="relative z-10 mx-auto max-w-[1400px] h-[80vh] rounded-[32px] border-4 border-white/20 overflow-hidden flex flex-col">
        {/* NAV */}
        <nav className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2 text-white text-xl font-bold">
            {/* Replace with your SVG logo if you have one */}
            <div className="w-6 h-6 bg-yellow-300 rounded-full" /> 
            Harmont
          </div>
          <ul className="flex items-center gap-8 text-gray-200">
            <li className="flex items-center gap-1">
              <span className="text-yellow-300 text-sm">•</span>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">Experiences</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button className="bg-yellow-300 text-black px-6 py-2 rounded-full">
                Book Now
              </button>
            </li>
          </ul>
        </nav>

        {/* HERO COPY */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-[64px] md:text-[96px] lg:text-[120px] font-black tracking-tight leading-[0.95] text-white">
            Find Your<br />
            <span className="font-black text-yellow-300">Perfect Space</span>
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl">
            Discover Handpicked Luxury Cabins In Breathtaking Locations. Unplug,
            Unwind, And Reconnect With What Matters Most.
          </p>

          {/* FEATURE TAGS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["Self Check‑in", "Wi‑Fi 100 Mbps", "Pet Friendly"].map((label) => (
              <span
                key={label}
                className="glass px-4 py-2 rounded-full text-white inline-flex items-center gap-2"
              >
                ♦ {label}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER TEXT + RATING */}
        <div className="relative px-8 pb-20">
          <p className="text-center text-white/80">
            Experience The Perfect Blend Of Comfort And Nature, Crafted For Your
            Ultimate Escape.
          </p>

          <div className="absolute bottom-0 right-8 flex flex-col items-end text-white">
            <span className="text-5xl font-bold">4.9</span>
            <span className="text-sm opacity-80">from 2,400+ stays</span>
          </div>
        </div>

        {/* BOOKING FORM (glass style) */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1000px] glass p-4 rounded-full flex items-center justify-between">
          {/* Room selector */}
          <div className="flex items-center gap-4">
            <HomeIcon className="w-6 h-6 text-gray-400" />
            <div>
              <div className="text-sm text-gray-400">Room</div>
              <div className="text-white">Pine Log</div>
            </div>
          </div>

          {/* Check‑in */}
          <div className="flex items-center gap-4">
            <CalendarDaysIcon className="w-6 h-6 text-gray-400" />
            <div>
              <div className="text-sm text-gray-400">Check‑in</div>
              <div className="text-white">15 Mar 2025</div>
            </div>
          </div>

          {/* Check‑out */}
          <div className="flex items-center gap-4">
            <CalendarDaysIcon className="w-6 h-6 text-gray-400" />
            <div>
              <div className="text-sm text-gray-400">Check‑out</div>
              <div className="text-white">30 Mar 2025</div>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-4">
            <UserIcon className="w-6 h-6 text-gray-400" />
            <div>
              <div className="text-sm text-gray-400">Guests</div>
              <div className="text-white">4 Adults</div>
            </div>
          </div>

          <button className="bg-yellow-300 text-black px-6 py-3 rounded-full font-medium">
            Book Your Stay
          </button>
        </div>
      </div>
    </main>
  );
}
