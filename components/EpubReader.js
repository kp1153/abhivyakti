"use client"

import { useState, useEffect } from "react"
import { ReactReader } from "react-reader"

export default function EpubReader() {
  const [location, setLocation] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    fetch("/api/epub")
      .then((res) => res.arrayBuffer())
      .then((buffer) => setUrl(buffer))
  }, [])

  if (!url) return <div style={{ padding: "20px" }}>Loading...</div>

  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        url={url}
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
      />
    </div>
  )
}