import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full border-t-2 border-orange-600 mt-16 bg-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 text-center text-white">
        {/* डेवलपर क्रेडिट */}
        <p className="text-sm">
          Passionately created by{" "}
          <Link
            href="https://www.web-developer-kp.com"
            target="_blank"
            className="underline text-orange-400 hover:text-orange-500"
          >
            web-developer-kp.com
          </Link>
        </p>

        {/* कॉपीराइट */}
        <p className="mt-4 text-xs text-gray-400">
          © {new Date().getFullYear()} अभिव्यक्ति — सर्वाधिकार सुरक्षित
        </p>
      </div>
    </footer>
  );
}