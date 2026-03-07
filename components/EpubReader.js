 "use client"

import { useState } from "react"
import { ReactReader } from "react-reader"

export default function EpubReader() {
  const [location, setLocation] = useState(null)

  return (
    <div style={{ height: "100vh", userSelect: "none" }}>
      <ReactReader
        url="https://cdn.sanity.io/files/sqcig83p/production/06d43efb1d70e8691a3bf16d2d7d612304f07125.epub"
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
        epubOptions={{ allowScriptedContent: true }}
      />
    </div>
  )
}