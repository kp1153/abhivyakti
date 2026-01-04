import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-orange-600 mt-16 bg-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-10">
        
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 text-white mb-8">
          
          {/* Editor */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              प्रधान संपादक
            </h3>
            <p className="font-semibold text-lg">रामचंद्र शुक्ल</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              संपर्क करें
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-6">📧</span>
                <a
                  href="mailto:abhivyakti1153@rediffmail.com"
                  className="text-orange-400 hover:underline"
                >
                  abhivyakti1153@rediffmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6">📍</span>
                <div>
                  <p>548 वी/125, विक्रम नगर</p>
                  <p>पोस्ट-मानक नगर, लखनऊ-226011</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6">📞</span>
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
