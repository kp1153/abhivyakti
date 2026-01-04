export default function PDFPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-8">
          पीडीएफ अंक
        </h1>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <span className="text-8xl">📅</span>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            प्रवेशांक
          </h2>
          
          <p className="text-2xl text-orange-600 font-semibold mb-6">
            मार्च 2025 में उपलब्ध होगा
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            अभिव्यक्ति का पहला पीडीएफ अंक मार्च 2025 में प्रकाशित होगा। 
            कृपया हमारे साथ जुड़े रहें।
          </p>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="text-slate-600 italic">
              "अभिव्यक्ति - समसामयिक साहित्य को समर्पित"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}