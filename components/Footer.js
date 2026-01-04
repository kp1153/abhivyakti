import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-orange-600 mt-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 text-white">

          {/* Editor */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold tracking-wide text-orange-400 mb-3">
              प्रधान संपादक
            </h3>

            <p className="text-2xl font-bold tracking-wide">
              रामचंद्र शुक्ल
            </p>

            <div className="mt-4 h-0.5 w-16 bg-orange-500" />
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide text-orange-400 mb-4">
              संपर्क करें
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4">
                <span className="w-6 text-lg">📧</span>
                <a
                  href="mailto:abhivyakti1153@rediffmail.com"
                  className="text-orange-300 hover:text-orange-400 transition"
                >
                  abhivyakti1153@rediffmail.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-6 text-lg">📍</span>
                <div className="leading-relaxed text-gray-300">
                  <p>548 वी/125, विक्रम नगर</p>
                  <p>पोस्ट-मानक नगर, लखनऊ-226011</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-6 text-lg">📞</span>
                <a
                  href="tel:9454413842"
                  className="text-orange-300 hover:text-orange-400 transition"
                >
                  9454413842
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-white">
          <p className="text-sm mb-2">
            Passionately created by{" "}
            <Link
              href="https://www.web-developer-kp.com"
              target="_blank"
              className="underline text-orange-400 hover:text-orange-500"
            >
              web-developer-kp.com
            </Link>
          </p>

          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} अभिव्यक्ति — सर्वाधिकार सुरक्षित
          </p>
        </div>

      </div>
    </footer>
  );
}
