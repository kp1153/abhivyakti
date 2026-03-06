import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function PDFPage() {
  const books = [
    {
      slug: "alanghya-hai-prem",
      title: "अलंघ्य है प्रेम",
      author: "Unknown",
      cover: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-2">पत्रिका अंक</h1>
        <p className="text-center text-gray-500 mb-10 text-sm">पढ़ने के लिए अंक चुनें</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Link key={book.slug} href={`/reader/${book.slug}`}
              className="group border border-amber-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white p-6 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-stone-800 group-hover:text-[#006680]">{book.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{book.author}</p>
              </div>
              <BookOpen size={20} className="text-[#006680] shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}