"use client"

import { useEffect } from "react"

export default function Reader() {

useEffect(()=>{

const script = document.createElement("script")
script.src = "https://unpkg.com/epubjs/dist/epub.min.js"

script.onload = () => {

const book = window.ePub("https://res.cloudinary.com/daqajumfg/raw/upload/v1772818427/alanghya_hai_prem_ykgsvo.epub")

const rendition = book.renderTo("viewer", {
width: "100%",
height: "100%"
})

rendition.display()

}

document.body.appendChild(script)

},[])

return (
<div className="w-full h-screen">
<div id="viewer" className="w-full h-full"></div>
</div>
)

}