 export async function GET() {
  const response = await fetch(
    "https://cdn.sanity.io/files/sqcig83p/production/0a008363c0b295f4eef050bf61d213b903799fd3.epub"
  )
  const buffer = await response.arrayBuffer()
  return new Response(buffer, {
    headers: {
      "Content-Type": "application/epub+zip",
      "Access-Control-Allow-Origin": "*",
    },
  })
}