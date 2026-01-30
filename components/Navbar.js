"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "होम" },
    { href: "/kavita", label: "कविता" },
    { href: "/kahani", label: "कहानी" },
    { href: "/upanyas-ansh", label: "उपन्यास अंश" },
    { href: "/yatra-vritant", label: "यात्रा वृतांत" },
    { href: "/bal-sahitya", label: "बाल साहित्य" },
    { href: "/hasya-vyangya", label: "हास्य व्यंग्य" },
    { href: "/samiksha", label: "समीक्षा" },
    { href: "/aatmakatha", label: "आत्मकथा" },
    { href: "/pdf", label: "पीडीएफ" },
    { href: "/vividh", label: "विविध" },
    { href: "/team", label: "टीम" },
  ];

  return (
    <nav className="bg-gray-900">
      <style dangerouslySetInnerHTML={{__html: `
        .menu-scroll::-webkit-scrollbar { height: 8px; }
        .menu-scroll::-webkit-scrollbar-track { background: #7f1d1d; }
        .menu-scroll::-webkit-scrollbar-thumb { background: #ef4444; border-radius: 6px; }
        .menu-scroll::-webkit-scrollbar-thumb:hover { background: #dc2626; }
      `}} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4 border-b border-gray-800 flex items-center justify-between md:justify-center">
          <Link href="/" className="flex justify-center">
            <Image
              src="/logo.jpeg"
              alt="अभिव्यक्ति"
              width={380}
              height={140}
              priority
              className="max-h-28 w-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} lg:block bg-zinc-900`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:overflow-x-auto lg:pb-2 menu-scroll gap-3 lg:gap-4 py-3 text-sm lg:text-base text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-200 transition whitespace-nowrap px-4 py-2 lg:p-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}