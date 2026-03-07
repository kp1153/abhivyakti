"use client"

import { useEffect, useRef, useState } from "react"

export default function EpubReader() {
  const viewerRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!viewerRef.current) return

    let rendition

    fetch("/api/epub")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        import("epubjs").then((module) => {
          const ePub = module.default
          const book = ePub(buffer)
          rendition = book.renderTo(viewerRef.current, {
            width: "100%",
            height: "100%",
            allowScriptedContent: true,
          })
          rendition.display()
          setLoading(false)
        })
      })

    return () => {
      if (rendition) rendition.destroy()
    }
  }, [])

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {loading && <div style={{ padding: "20px" }}>लोड हो रहा है...</div>}
      <div ref={viewerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}