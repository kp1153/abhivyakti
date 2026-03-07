"use client"

import { useState } from "react"
import { ReactReader } from "react-reader"

export default function EpubReader() {
  const [location, setLocation] = useState(null)

  return (
    <div style={{ height: "100vh", userSelect: "none" }}>
      <ReactReader
        url="https://cdn.sanity.io/files/sqcig83p/production/24c4598585ed377da9fbe23653a85247a021c047.epub"
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
        epubOptions={{ allowScriptedContent: true }}
      />
    </div>
  )
}