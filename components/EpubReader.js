"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, X } from "lucide-react";

export default function EpubReader({ title, url }) {
  const viewerRef = useRef(null);
  const bookRef = useRef(null);
  const renditionRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function init() {
      try {
        const ePub = (await import("epubjs")).default;
        if (ignore) return;

        const book = ePub(url, { openAs: "epub" });
        bookRef.current = book;

        const rendition = book.renderTo(viewerRef.current, {
          width: "100%",
          height: "100%",
          flow: "paginated",
        });
        renditionRef.current = rendition;

        rendition.themes.default({
          body: {
            "font-family": "Georgia, serif",
            "font-size": "1.2rem",
            "line-height": "2rem",
            color: "#292524",
            background: "#fdf6e3",
            "user-select": "none",
          },
        });

        await rendition.display();
        setReady(true);
      } catch (e) {
        setError("Book could not be loaded.");
      }
    }

    init();

    return () => {
      ignore = true;
      renditionRef.current?.destroy();
      bookRef.current?.destroy();
    };
  }, [url]);

  function prev() { renditionRef.current?.prev(); }
  function next() { renditionRef.current?.next(); }

  return (
    <div className="fixed inset-0 bg-[#fdf6e3] flex flex-col select-none z-50"
      onContextMenu={e => e.preventDefault()}>

      <div className="flex items-center justify-between px-6 py-3 border-b border-amber-200">
        <div className="flex items-center gap-2 text-[#006680]">
          <BookOpen size={18} />
          <span className="font-bold text-sm">{title}</span>
        </div>
        <a href="/pdf" className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </a>
      </div>

      <div ref={viewerRef} className="flex-1 overflow-hidden" />

      {error && <p className="text-center text-red-500 p-4">{error}</p>}

      {!ready && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#fdf6e3]">
          <p className="text-gray-400">Loading...</p>
        </div>
      )}

      <div className="flex items-center justify-between px-6 py-3 border-t border-amber-200">
        <button onClick={prev}
          className="flex items-center gap-1 text-sm font-semibold text-[#006680]">
          <ChevronLeft size={18} /> Prev
        </button>
        <button onClick={next}
          className="flex items-center gap-1 text-sm font-semibold text-[#006680]">
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}