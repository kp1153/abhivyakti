import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-orange-600 mt-16 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8 text-white mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              संपर्क करें
            </h3>

            <div className="space-y-3 text-sm">
              <p className="font-semibold text-lg">रामचंद्र शुक्ल</p>
              <p className="text-orange-300">प्रधान संपादक</p>

              {/* Email */}
              <div className="flex items-start gap-2">
                <span>📧</span>
                <div>
                  <p className="font-semibold">ईमेल</p>
                  <a
                    href="mailto:abhivyakti1153@rediffmail.com"
                    className="text-orange-400 hover:underline"
                  >
                    abhivyakti1153@rediffmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <p className="font-semibold">पता</p>
                  <p>548 वी/125, विक्रम नगर</p>
                  <p>पोस्ट-मानक नगर, लखनऊ-226011</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2">
                <span>📞</span>
                <div>
                  <p className="font-semibold">संपर्क</p>
                  <a
                    href="tel:9454413842"
                    className="text-orange-400 hover:underline"
                  >
                    9454413842
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              त्वरित लिंक
            </h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-orange-400">
                होम
              </Link>
              <Link href="/team" className="block hover:text-orange-400">
                टीम
              </Link>
              <Link href="/pdf" className="block hover:text-orange-400">
                पीडीएफ अंक
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-6 text-center text-white">
          <p className="text-sm mb-3">
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
