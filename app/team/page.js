export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12">
          हमारी टीम
        </h1>

        {/* प्रधान संपादक */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 border-orange-600 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              रामचंद्र शुक्ल
            </h2>
            <p className="text-xl text-orange-600 font-semibold">
              प्रधान संपादक
            </p>
          </div>

          <div className="space-y-6 text-lg text-slate-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold text-slate-800">ईमेल</p>
                <a
                  href="mailto:abhivyakti1153@rediffmail.com"
                  className="text-orange-600 hover:underline"
                >
                  abhivyakti1153@rediffmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-slate-800">पता</p>
                <p>548 वी/125, विक्रम नगर</p>
                <p>पोस्ट-मानक नगर, लखनऊ-226011</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold text-slate-800">संपर्क</p>
                <a
                  href="tel:9454413842"
                  className="text-orange-600 hover:underline"
                >
                  9454413842
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* विधि सलाहकार */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500 mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            विधि सलाहकार
          </h3>
          <p className="text-xl font-semibold text-slate-700 mb-2">
            एडवोकेट मुर्तजा हुसैन
          </p>
          <div className="flex items-center gap-2 text-slate-600">
            <span>📞</span>
            <a
              href="tel:9810357561"
              className="text-orange-600 hover:underline"
            >
              98103 57561
            </a>
          </div>
        </div>

        {/* संपादक मंडल */}
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-500 mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            संपादक मंडल
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {/* वंदना शुक्ला */}
            <div className="text-center">
              <p className="text-xl font-semibold text-slate-700 mb-3">
                वंदना शुक्ला
              </p>
              <div className="flex flex-col items-center gap-2 text-slate-600">
                <a
                  href="mailto:abhivyakti1153@gmail.com"
                  className="text-orange-600 hover:underline text-sm flex items-center gap-2"
                >
                  <span>📧</span>
                  abhivyakti1153@gmail.com
                </a>
              </div>
            </div>

            {/* डॉ. नृपेंद्र नारायण सिंह */}
            <div className="text-center">
              <img
                src="/1.jpg"
                alt="डॉ. नृपेंद्र नारायण सिंह"
                className="w-24 h-24 rounded-lg object-cover shadow-md mx-auto mb-3"
              />
              <p className="text-xl font-semibold text-slate-700 mb-2">
                डॉ. नृपेंद्र नारायण सिंह
              </p>
              <div className="flex flex-col items-center gap-2 text-slate-600">
                <a
                  href="tel:8787037469"
                  className="text-orange-600 hover:underline text-sm flex items-center gap-2"
                >
                  <span>📞</span>
                  8787037469
                </a>
                <a
                  href="mailto:dr.nripendra.nns@gmail.com"
                  className="text-orange-600 hover:underline text-xs flex items-center gap-2"
                >
                  <span>📧</span>
                  dr.nripendra.nns@gmail.com
                </a>
              </div>
            </div>

            {/* विक्की मिंज */}
            <div className="text-center">
              <img
                src="/2.jpg"
                alt="विक्की मिंज"
                className="w-24 h-24 rounded-lg object-cover shadow-md mx-auto mb-3"
              />
              <p className="text-xl font-semibold text-slate-700 mb-2">
                विक्की मिंज
              </p>
              <div className="flex flex-col items-center gap-2 text-slate-600">
                <a
                  href="tel:7050667150"
                  className="text-orange-600 hover:underline text-sm flex items-center gap-2"
                >
                  <span>📞</span>
                  7050667150
                </a>
                <a
                  href="mailto:Vickyminz26@gmail.com"
                  className="text-orange-600 hover:underline text-xs flex items-center gap-2"
                >
                  <span>📧</span>
                  Vickyminz26@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* वेबसाइट डेवलपमेंट */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500 mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            वेबसाइट डेवलपमेंट एवं रखरखाव
          </h3>
          <p className="text-xl font-semibold text-slate-700 mb-3">
            क्रिएटिव सॉल्यूशंस
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-600">
              <span>🌐</span>
              <a
                href="https://www.web-developer-kp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                web-developer-kp.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span>📞</span>
              <a
                href="tel:9996865069"
                className="text-orange-600 hover:underline"
              >
                9996865069
              </a>
            </div>
          </div>
        </div>

        {/* टैगलाइन */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-slate-300">
          <p className="text-slate-600 italic text-lg">
            "अभिव्यक्ति - समसामयिक साहित्य को समर्पित"
          </p>
        </div>
      </div>
    </div>
  );
}
