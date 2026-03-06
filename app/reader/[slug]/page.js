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

// ← →
document.addEventListener("keydown", (e) => {

if(e.key === "ArrowRight"){
rendition.next()
}

if(e.key === "ArrowLeft"){
rendition.prev()
}

})

}

document.body.appendChild(script)

},[])

return (

<div className="w-full h-screen relative">

<div id="viewer" className="w-full h-full"></div>

<button
onClick={()=>window.rendition?.prev()}
className="absolute left-4 top-1/2 bg-white px-3 py-2 shadow"
>
←
</button>

<button
onClick={()=>window.rendition?.next()}
className="absolute right-4 top-1/2 bg-white px-3 py-2 shadow"
>
→
</button>

</div>

)

}