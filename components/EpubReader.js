"use client";

import { useState } from "react";
import { ReactReader } from "react-reader";

export default function EpubReader() {
  const [location, setLocation] = useState(null);

  return (
    <div style={{ height: "100vh", userSelect: "none" }}>
      <ReactReader
        url="/api/epub"
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
        epubOptions={{ allowScriptedContent: true }}
      />
    </div>
  );
}
