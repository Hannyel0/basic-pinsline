import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-black">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-4xl text-white">
          Pinsline
        </Link>
      </div>
      <div>
        <Link href="/working">
          <button className="cursor-pointer px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
} 