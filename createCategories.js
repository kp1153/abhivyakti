import { createClient } from "@sanity/client";
import dotenv from "dotenv";

// Load .env.local file
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const categories = [
  { name: "कविता", slug: "kavita" },
  { name: "कहानी", slug: "kahani" },
  { name: "उपन्यास अंश", slug: "upanyas-ansh" },
  { name: "यात्रा वृतांत", slug: "yatra-vritant" },
  { name: "बाल साहित्य", slug: "bal-sahitya" },
  { name: "हास्य व्यंग्य", slug: "hasya-vyangya" },
  { name: "पुस्तक समीक्षा", slug: "pustak-samiksha" },
  { name: "आत्मकथा", slug: "aatmakatha" },
  { name: "पीडीएफ अंक", slug: "pdf" },
];

async function createCategories() {
  console.log("🚀 Starting category creation...\n");

  for (const category of categories) {
    try {
      // Check if category already exists
      const existing = await client.fetch(
        `*[_type == "category" && slug.current == $slug][0]`,
        { slug: category.slug }
      );

      if (existing) {
        console.log(`⏭️  Skipped: "${category.name}" (already exists)`);
        continue;
      }

      // Create new category
      const doc = {
        _type: "category",
        name: category.name,
        slug: {
          _type: "slug",
          current: category.slug,
        },
      };

      await client.create(doc);
      console.log(`✅ Created: "${category.name}" → /${category.slug}`);
    } catch (error) {
      console.error(`❌ Error creating "${category.name}":`, error.message);
    }
  }

  console.log("\n🎉 Category creation completed!");
}

createCategories();