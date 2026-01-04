import { getPostsByCategory } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

const menu = [
  { title: "होम", href: "/" },
  { title: "कविता", href: "/category/kavita" },
  { title: "कहानी", href: "/category/kahani" },
  { title: "उपन्यास अंश", href: "/category/upanyas-ansh" },
  { title: "यात्रा वृतांत", href: "/category/yatra-vritant" },
  { title: "बाल साहित्य", href: "/category/bal-sahitya" },
  { title: "हास्य व्यंग्य", href: "/category/hasya-vyangya" },
  { title: "पुस्तक समीक्षा", href: "/category/pustak-samiksha" },
  { title: "आत्मकथा", href: "/category/aatmakatha" },
  { title: "पीडीएफ अंक", href: "/pdf" },
  { title: "टीम", href: "/team" },
];

const getCategoryDisplayName = (route) => {
  const menuItem = menu.find(
    (item) => item.href === `/category/${route}` || item.href === `/${route}`
  );
  return menuItem ? menuItem.title : route;
};

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const safeCategory = decodeURIComponent(category);
  const posts = await getPostsByCategory(safeCategory);
  const categoryDisplayName = getCategoryDisplayName(safeCategory);

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center gap-2 text-xs uppercase font-bold text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#006680]">
            होम
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-800">{categoryDisplayName}</span>
        </div>
        <h1 className="text-4xl font-black mb-8">{categoryDisplayName}</h1>
        <p className="text-lg text-gray-600">
          इस श्रेणी में अभी कोई रचना उपलब्ध नहीं है।
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-xs uppercase font-bold text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#006680]">
          होम
        </Link>
        <ChevronRight size={12} />
        <span className="text-gray-800">{categoryDisplayName}</span>
      </div>

      <h1 className="text-4xl font-black mb-8">{categoryDisplayName}</h1>

      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/category/${safeCategory}/${post.slug.current}`}
            className="group"
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded">
              {post.mainImageUrl || post.mainImage ? (
                <Image
                  src={post.mainImageUrl || post.mainImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 duration-500"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">कोई चित्र नहीं</span>
                </div>
              )}
            </div>
            <h2 className="text-xl font-bold mt-3 group-hover:text-[#006680]">
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}