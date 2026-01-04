"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { title: "होम", href: "/" },
    { title: "कविता", href: "/kavita" },
    { title: "कहानी", href: "/kahani" },
    { title: "उपन्यास अंश", href: "/upanyas-ansh" },
    { title: "यात्रा वृतांत", href: "/yatra-vritant" },
    { title: "बाल साहित्य", href: "/bal-sahitya" },
    { title: "हास्य व्यंग्य", href: "/hasya-vyangya" },
    { title: "पुस्तक समीक्षा", href: "/pustak-samiksha" },
    { title: "आत्मकथा", href: "/aatmakatha" },
    { title: "पीडीएफ अंक", href: "/pdf" },
    { title: "टीम", href: "/team" },
  ];

  return (
    <header className="z-50 bg-slate-800 border-b-2 border-orange-700 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          className="lg:hidden text-2xl font-bold text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          ☰
        </button>

        <Link href="/" className="mx-auto text-center">
          <div className="text-3xl font-extrabold tracking-wide text-white">
            अभिव्यक्ति
          </div>
          <div className="text-xs tracking-widest text-gray-300">
            समसामयिक साहित्य को समर्पित
          </div>
        </Link>
      </nav>

      <div className="hidden lg:flex justify-center border-t border-zinc-700">
        <ul className="flex gap-0.5 py-2 flex-wrap">
          {menu.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="px-2.5 py-1.5 text-sm font-medium text-white hover:bg-zinc-800 rounded-md block"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-zinc-700 bg-zinc-900 px-4 py-4">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block font-semibold py-2 text-white hover:bg-zinc-800 rounded"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}