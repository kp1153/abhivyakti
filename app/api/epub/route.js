import { readFileSync } from "fs"
import { join } from "path"

export async function GET() {
  const response = await fetch(
    "https://cdn.sanity.io/files/sqcig83p/production/06d43efb1d70e8691a3bf16d2d7d612304f07125.epub"
  )
  const buffer = await response.arrayBuffer()
  return new Response(buffer, {
    headers: {
      "Content-Type": "application/epub+zip",
      "Access-Control-Allow-Origin": "*",
    },
  })
}