import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-orange-600 mt-16"
      style={{ background: "rgba(243, 162, 45, 1)" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-10 text-center text-gray-900">
        {/* पत्रिका का नाम */}
        <h2 className="text-2xl font-extrabold tracking-wide">
          अभिव्यक्ति
        </h2>
        <p className="text-xs tracking-widest mt-1">
          समय, समाज और संवेदना की आवाज़
        </p>

        {/* प्रधान संपादक */}
        <p className="mt-6 text-lg font-semibold">
          रामचंद्र शुक्ल
        </p>
        <p className="text-sm">प्रधान संपादक</p>

        {/* पता */}
        <p className="mt-3 text-sm leading-relaxed">
          548 वी/125, विक्रम नगर,<br />
          पोस्ट-मानक नगर,<br />
          लखनऊ – 226011
        </p>

        {/* संपर्क */}
        <p className="mt-3 text-sm">
          📞{" "}
          <a href="tel:9454413842" className="hover:underline">
            9454413842
          </a>
        </p>

        <p className="text-sm">
          ✉️{" "}
          <a
            href="mailto:ramchandra.shukla@hamaramorcha.com"
            className="hover:underline"
          >
            ramchandra.shukla@hamaramorcha.com
          </a>
        </p>

        {/* डेवलपर क्रेडिट */}
        <p className="mt-6 text-sm">
          Passionately created by{" "}
          <Link
            href="https://www.web-developer-kp.com"
            target="_blank"
            className="underline text-pink-700 hover:text-pink-800"
          >
            web-developer-kp.com
          </Link>
        </p>

        {/* कॉपीराइट */}
        <p className="mt-4 text-xs text-gray-800">
          © {new Date().getFullYear()} अभिव्यक्ति — सर्वाधिकार सुरक्षित
        </p>
      </div>
    </footer>
  );
}
