import { readFileSync } from "fs"
import { join } from "path"

export async function GET() {
  const filePath = join(process.cwd(), "public", "alanghya_hai_prem_ykgsvo.epub")
  const file = readFileSync(filePath)
  return new Response(file, {
    headers: {
      "Content-Type": "application/epub+zip",
      "Access-Control-Allow-Origin": "*",
    },
  })
}