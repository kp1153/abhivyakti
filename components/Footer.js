import Link from "next/link";
import { Mail, MapPin, Phone, User } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Editor Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User size={24} className="text-orange-500" strokeWidth={2.5} />
              <h3 className="text-lg font-bold text-white">प्रधान संपादक</h3>
            </div>
            <p className="text-white text-xl font-semibold mb-2">रामचंद्र शुक्ल</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">संपर्क करें</h3>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-orange-500 mt-1 flex-shrink-0" strokeWidth={2.5} />
                <a 
                  href="mailto:abhivyakti1153@rediffmail.com"
                  className="hover:text-orange-500 transition-colors break-all"
                >
                  abhivyakti1153@rediffmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 mt-1 flex-shrink-0" strokeWidth={2.5} />
                <p className="leading-relaxed">
                  548 वी/125, विक्रम नगर<br />
                  पोस्ट-मानक नगर, लखनऊ-226011
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" strokeWidth={2.5} />
                <a 
                  href="tel:+919454413842"
                  className="hover:text-orange-500 transition-colors text-lg font-medium"
                >
                  9454413842
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} अभिव्यक्ति — सर्वाधिकार सुरक्षित
            </p>

            <Link
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
            >
              Passionately created by <span className="font-semibold">web-developer-kp.com</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}