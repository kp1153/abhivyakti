// app/[category]/[slug]/page.js
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlugAndCategory } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import PortableTextComponents from "@/components/PortableTextComponents";
import { ChevronRight, Calendar, User, Edit } from "lucide-react";
import ViewsCounter from "@/components/ViewsCounter";

export const dynamic = "force-dynamic";

const getCategoryDisplayName = (route) => {
const displayNames = {
  kavita: "कविता",
  kahani: "कहानी",
  "upanyas-ansh": "उपन्यास अंश",
  "yatra-vritant": "यात्रा वृतांत",
  "bal-sahitya": "बाल साहित्य",
  "hasya-vyangya": "हास्य व्यंग्य",
  "pustak-samiksha": "पुस्तक समीक्षा",
  aatmakatha: "आत्मकथा",
  pdf: "पीडीएफ अंक",
  team: "टीम",
};
  return displayNames[route] || route;
};

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const safeCategory = decodeURIComponent(category);
  const safeSlug = decodeURIComponent(slug);

  const post = await getPostBySlugAndCategory(safeSlug, safeCategory);
  
  if (!post) {
    return { title: "Not Found" };
  }

  const categoryDisplayName = getCategoryDisplayName(safeCategory);
  const description = `${post.title} - ${categoryDisplayName} | अभिव्यक्ति पर पढ़ें`;
  const imageUrl = post.mainImageUrl || 'https://www.abhivyakti.xyz/og-image.png';
  const pageUrl = `https://www.abhivyakti.xyz/${safeCategory}/${safeSlug}`;

  return {
    metadataBase: new URL("https://www.abhivyakti.xyz"),
    title: `${post.title} | अभिव्यक्ति`,
    description: description,
    openGraph: {
      title: `${post.title} | अभिव्यक्ति`,
      description: description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      url: pageUrl,
      type: 'article',
      siteName: 'अभिव्यक्ति',
      locale: 'hi_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | अभिव्यक्ति`,
      description: description,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    }
  };
}

export default async function NewsPage({ params }) {
  const { category, slug } = await params;
  const safeCategory = decodeURIComponent(category);
  const safeSlug = decodeURIComponent(slug);

  const post = await getPostBySlugAndCategory(safeSlug, safeCategory);
  if (!post) return notFound();

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const categoryDisplayName = getCategoryDisplayName(safeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <a 
        href={`https://www.abhivyakti.xyz/studio/structure/post;${post._id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-700 flex items-center gap-2 z-50"
      >
        <Edit size={18} />
        एडिट करें
      </a>    

      <div className="flex items-center gap-2 text-xs uppercase font-bold text-gray-500 mb-6 border-b pb-3">
        <Link href="/" className="hover:text-[#006680]">
          होम
        </Link>
        <ChevronRight size={12} />
        <Link href={`/${safeCategory}`} className="hover:text-[#006680]">
          {categoryDisplayName}
        </Link>
        <ChevronRight size={12} />
        <span className="text-gray-800">{post.title}</span>
      </div>

      <span className="bg-[#006680] text-white text-xs px-2 py-1 rounded-sm">
        {categoryDisplayName}
      </span>

      <h1 className="text-4xl font-bold my-4">{post.title}</h1>

      <div className="flex gap-4 text-sm text-gray-500 border-y py-2 mb-6">
        <span className="flex items-center gap-1">
          <User size={14} /> संपादकीय टीम
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={14} /> {formatDate(post.publishedAt)}
        </span>
        <ViewsCounter slug={safeSlug} initialViews={post.views || 0} />
      </div>

      {post.mainImageUrl && (
        <Image
          src={post.mainImageUrl}
          alt="main image"
          width={1200}
          height={700}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="rounded mb-8"
        />
      )}
      {post.mainImageCaption && (
        <p className="text-sm text-gray-600 italic text-center -mt-6 mb-8">
          {post.mainImageCaption}
        </p>
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText 
          value={post.content} 
          components={PortableTextComponents}
        />
      </div>
    </div>
  );
}
