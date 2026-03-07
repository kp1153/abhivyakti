"use client"

import { useState } from "react"
import { ReactReader } from "react-reader"

export default function EpubReader() {
  const [location, setLocation] = useState(null)

  return (
    <div style={{ height: "100vh", userSelect: "none" }}>
      <ReactReader
        url="https://cdn.sanity.io/files/sqcig83p/production/b4f2c5643731abd06bd5f8b9205779c14697eaeb.epub"
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
        epubOptions={{ allowScriptedContent: true }}
      />
    </div>
  )
}