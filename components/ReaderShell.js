"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, BookOpen, X } from "lucide-react";

export default function ReaderShell({ title, children }) {
  const contentRef = useRef(null);
  const [pages, setPages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // copy all child nodes
    const allNodes = Array.from(el.childNodes);
    const pageHeight = window.innerHeight - 160;
    const built = [];
    let group = [];
    let height = 0;

    const temp = document.createElement("div");
    temp.style.cssText = `
      position:absolute;visibility:hidden;width:${el.offsetWidth}px;
      font-size:1.2rem;line-height:2rem;font-family:inherit;
    `;
    document.body.appendChild(temp);

    allNodes.forEach((node) => {
      const clone = node.cloneNode(true);
      temp.appendChild(clone);
      const h = temp.scrollHeight - height;
      if (height + h > pageHeight && group.length > 0) {
        built.push([...group]);
        group = [node];
        height = h;
      } else {
        group.push(node);
        height += h;
      }
    });

    if (group.length > 0) built.push(group);
    document.body.removeChild(temp);

    // convert node groups to html strings
    const div = document.createElement("div");
    const htmlPages = built.map((g) => {
      div.innerHTML = "";
      g.forEach((n) => div.appendChild(n.cloneNode(true)));
      return div.innerHTML;
    });

    setPages(htmlPages.length > 0 ? htmlPages : ["<p>सामग्री उपलब्ध नहीं</p>"]);
    setReady(true);
  }, []);

  // anti-copy
  useEffect(() => {
    const block = (e) => e.preventDefault();
    document.addEventListener("contextmenu", block);
    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("selectstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("selectstart", block);
    };
  }, []);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(pages.length - 1, c + 1));

  return (
    <div className="fixed inset-0 bg-[#fdf6e3] flex flex-col select-none z-50">
      {/* header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-amber-200 bg-[#fdf6e3]">
        <div className="flex items-center gap-2 text-[#006680]">
          <BookOpen size={18} />
          <span className="font-bold text-sm">{title}</span>
        </div>
        <a href="/" className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </a>
      </div>

      {/* hidden source for pagination */}
      <div ref={contentRef} className="hidden prose prose-lg max-w-none">
        {children}
      </div>

      {/* reader body */}
      <div className="flex-1 overflow-hidden flex items-center justify-center px-4">
        <div className="w-full max-w-2xl h-full py-6 overflow-hidden">
          {ready ? (
            <div
              className="prose prose-lg max-w-none h-full overflow-hidden text-stone-800 leading-8 text-xl"
              style={{ fontFamily: "'Georgia', serif" }}
              dangerouslySetInnerHTML={{ __html: pages[current] || "" }}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              लोड हो रहा है...
            </div>
          )}
        </div>
      </div>

      {/* footer nav */}
      <div className="flex items-center justify-between px-6 py-3 border-t border-amber-200 bg-[#fdf6e3]">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1 text-sm font-semibold text-[#006680] disabled:text-gray-300"
        >
          <ChevronLeft size={18} /> पिछला
        </button>

        <span className="text-xs text-gray-400">
          {ready ? `${current + 1} / ${pages.length}` : "..."}
        </span>

        <button
          onClick={next}
          disabled={current === pages.length - 1}
          className="flex items-center gap-1 text-sm font-semibold text-[#006680] disabled:text-gray-300"
        >
          अगला <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}