export default function Team() {
  const boardMembers = [
    {
      name: "वंदना शुक्ला",
      email: "abhivyakti1153@gmail.com",
      img: null,
    },
    {
      name: "डॉ. नृपेंद्र नारायण सिंह",
      phone: "8787037469",
      email: "dr.nripendra.nns@gmail.com",
      img: null,
    },
    {
      name: "विक्की मिंज",
      phone: "7050667150",
      email: "Vickyminz26@gmail.com",
      img: null,
    },
    {
      name: "डॉ. आर.डी. आनंद",
      phone: "94512 03713",
      img: null,
    },
    {
      name: "अमित अनुराग पांडेय",
      phone: "9589150381",
      email: "pandeyji9912@gmail.com",
      address: "26-A वर्द्धमान ग्रीन वैली एक्सटेंशन अवधपुरी, भोपाल म.प्र. 462022",
      img: null,
    },
    {
      name: "अंकित कुमार मौर्य",
      role: "साहित्य संवाददाता",
      phone: "96953 63793",
      email: "ankitkrmauryaaubhu@gmail.com",
      img: null,
    },
  ];

  const Avatar = ({ name }) => {
    const initials = name.trim().split(" ").slice(0, 2).map(w => w[0]).join("");
    return (
      <div style={{
        width: 72, height: 72, borderRadius: 10,
        background: "linear-gradient(135deg, #ea580c, #f97316)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 12px", fontSize: 22, color: "#fff", fontWeight: 700,
        boxShadow: "0 4px 12px rgba(234,88,12,0.3)"
      }}>
        {initials}
      </div>
    );
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #f8fafc, #f1f5f9)", padding: "48px 16px", fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Title */}
        <h1 style={{ fontSize: 40, fontWeight: 800, textAlign: "center", color: "#1e293b", marginBottom: 40 }}>
          हमारी टीम
        </h1>

        {/* Chief Editor */}
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.08)", padding: "40px", borderTop: "4px solid #dc2626", marginBottom: 24 }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#1e293b", marginBottom: 6 }}>रामचंद्र शुक्ल</h2>
            <p style={{ fontSize: 18, color: "#ea580c", fontWeight: 600 }}>प्रधान संपादक</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 16, color: "#475569" }}>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ fontSize: 22 }}>📧</span>
              <div>
                <p style={{ fontWeight: 600, color: "#1e293b", marginBottom: 2 }}>ईमेल</p>
                <a href="mailto:abhivyakti1153@rediffmail.com" style={{ color: "#ea580c" }}>abhivyakti1153@rediffmail.com</a>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ fontSize: 22 }}>📍</span>
              <div>
                <p style={{ fontWeight: 600, color: "#1e293b", marginBottom: 2 }}>पता</p>
                <p>548 वी/125, विक्रम नगर</p>
                <p>पोस्ट-मानक नगर, लखनऊ-226011</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <span style={{ fontSize: 22 }}>📞</span>
              <div>
                <p style={{ fontWeight: 600, color: "#1e293b", marginBottom: 2 }}>संपर्क</p>
                <a href="tel:9454413842" style={{ color: "#ea580c" }}>9454413842</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Advisor */}
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.06)", padding: "24px", borderLeft: "4px solid #ea580c", marginBottom: 20 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1e293b", marginBottom: 12 }}>विधि सलाहकार</h3>
          <p style={{ fontSize: 18, fontWeight: 600, color: "#334155", marginBottom: 8 }}>एडवोकेट मुर्तजा हुसैन</p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>📞</span>
            <a href="tel:9810357561" style={{ color: "#ea580c" }}>98103 57561</a>
          </div>
        </div>

        {/* Editorial Board */}
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.06)", padding: "32px", borderLeft: "4px solid #ea580c", marginBottom: 20 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1e293b", marginBottom: 28 }}>संपादक मंडल</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 28 }}>
            {boardMembers.map((m, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <Avatar name={m.name} />
                <p style={{ fontSize: 15, fontWeight: 600, color: "#334155", marginBottom: 4 }}>{m.name}</p>
                {m.role && <p style={{ fontSize: 12, color: "#ea580c", fontWeight: 600, marginBottom: 6 }}>{m.role}</p>}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, fontSize: 12 }}>
                  {m.phone && (
                    <a href={`tel:${m.phone.replace(/\s/g, "")}`} style={{ color: "#ea580c", display: "flex", alignItems: "center", gap: 4 }}>
                      📞 {m.phone}
                    </a>
                  )}
                  {m.email && (
                    <a href={`mailto:${m.email}`} style={{ color: "#ea580c", display: "flex", alignItems: "center", gap: 4, wordBreak: "break-all" }}>
                      📧 {m.email}
                    </a>
                  )}
                  {m.address && <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>{m.address}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website Dev */}
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.06)", padding: "24px", borderLeft: "4px solid #ea580c", marginBottom: 20 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1e293b", marginBottom: 12 }}>वेबसाइट डेवलपमेंट एवं रखरखाव</h3>
          <p style={{ fontSize: 17, fontWeight: 600, color: "#334155", marginBottom: 10 }}>क्रिएटिव सॉल्यूशंस</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>🌐</span>
              <a href="https://www.web-developer-kp.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ea580c" }}>web-developer-kp.com</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>📞</span>
              <a href="tel:9996865069" style={{ color: "#ea580c" }}>9996865069</a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.06)", padding: "24px", textAlign: "center", borderTop: "4px solid #cbd5e1" }}>
          <p style={{ color: "#64748b", fontStyle: "italic", fontSize: 17 }}>
            "अभिव्यक्ति - समसामयिक साहित्य को समर्पित"
          </p>
        </div>

      </div>
    </div>
  );
}