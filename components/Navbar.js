"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const menu = [
    { title: "होम", href: "/" },

    {
      title: "रचनाएँ",
      children: [
        {
          title: "कविता",
          children: [
            { title: "नई कविताएँ", href: "/poetry/new" },
            { title: "ग़ज़ल", href: "/poetry/ghazal" },
            { title: "गीत / नवगीत", href: "/poetry/song" },
            { title: "प्रयोगधर्मी", href: "/poetry/experimental" },
          ],
        },
        {
          title: "कहानी",
          children: [
            { title: "लघुकथा", href: "/story/short-short" },
            { title: "कहानी", href: "/story/short" },
            { title: "लंबी कहानी", href: "/story/long" },
          ],
        },
        { title: "उपन्यास अंश", href: "/novel-extracts" },
      ],
    },

    {
      title: "विमर्श",
      children: [
        { title: "आलोचना", href: "/criticism" },
        { title: "पुस्तक समीक्षा", href: "/reviews" },
        { title: "वैचारिक लेख", href: "/essays" },
      ],
    },

    {
      title: "विशेष",
      children: [
        { title: "अनुवाद", href: "/translation" },
        { title: "स्त्री स्वर", href: "/stree-swar" },
        { title: "युवा अभिव्यक्ति", href: "/young-writers" },
        { title: "संस्मरण", href: "/memoir" },
        { title: "साक्षात्कार", href: "/interview" },
      ],
    },

    {
      title: "पत्रिका",
      children: [
        { title: "वर्तमान अंक (वेब)", href: "/current-issue" },

        {
          title: "PDF अंक",
          children: [
            {
              title: "प्रवेशांक – मार्च 2026",
              href: "/pdf/2026/praveshank-march",
            },
          ],
        },

        { title: "पुरालेख (वेब)", href: "/archives" },
        { title: "संपादकीय", href: "/editorial" },
      ],
    },

    { title: "रचना भेजें", href: "/submit" },
    { title: "हमारे बारे में", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f3a22d] border-b-2 border-orange-700 shadow-lg">
      {/* Top Bar */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          className="lg:hidden text-2xl font-bold"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          ☰
        </button>

        <Link href="/" className="mx-auto text-center">
          <div className="text-3xl font-extrabold tracking-wide text-gray-900">
            अभिव्यक्ति
          </div>
          <div className="text-xs tracking-widest text-gray-800">
            समय, समाज और संवेदना की आवाज़
          </div>
        </Link>
      </nav>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-center border-t border-orange-700">
        <ul className="flex gap-1 py-2">
          {menu.map((item, i) =>
            item.children ? (
              <li key={i} className="relative group">
                <span className="cursor-pointer px-4 py-2 font-medium hover:bg-orange-300 rounded-md">
                  {item.title}
                </span>

                <ul className="absolute left-0 top-full hidden group-hover:block bg-orange-200 shadow-xl rounded-md min-w-[260px]">
                  {item.children.map((child, j) =>
                    child.children ? (
                      <li key={j} className="px-4 py-2">
                        <div className="font-semibold">{child.title}</div>
                        <ul className="ml-3 mt-1">
                          {child.children.map((sub, k) => (
                            <li key={k}>
                              <Link
                                href={sub.href}
                                className="block py-1 text-sm hover:underline"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={j}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 hover:bg-orange-300"
                        >
                          {child.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ) : (
              <li key={i}>
                <Link
                  href={item.href}
                  className="px-4 py-2 font-medium hover:bg-orange-300 rounded-md"
                >
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-orange-700 bg-[#f3a22d] px-4 py-4">
          {menu.map((item, i) => (
            <div key={i} className="mb-2">
              {item.children ? (
                <>
                  <button
                    className="w-full text-left font-semibold py-2"
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                  >
                    {item.title}
                  </button>

                  {openIndex === i && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child, j) =>
                        child.children ? (
                          <div key={j}>
                            <div className="font-medium">
                              {child.title}
                            </div>
                            <div className="ml-3">
                              {child.children.map((sub, k) => (
                                <Link
                                  key={k}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-sm py-1"
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={j}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1"
                          >
                            {child.title}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-semibold py-2"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
