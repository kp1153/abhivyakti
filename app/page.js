// app/page.js
import React from "react";
import { getAllPosts, getCategories, getPopularPosts } from "@/lib/sanity";
import MagazineLayout from "@/components/HomeContent";

export const revalidate = 60;

export const metadata = {
  title: 'अभिव्यक्ति - समसामयिक साहित्य को समर्पित',
  description: 'कविता, कहानी, उपन्यास अंश, यात्रा वृतांत, बाल साहित्य, हास्य व्यंग्य और पुस्तक समीक्षा। हिंदी साहित्य की श्रेष्ठ रचनाओं का संग्रह।',
  openGraph: {
    title: 'अभिव्यक्ति - समसामयिक साहित्य को समर्पित',
    description: 'हिंदी साहित्य की श्रेष्ठ रचनाओं का मंच',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'अभिव्यक्ति - समसामयिक साहित्य को समर्पित',
    description: 'कविता, कहानी और साहित्यिक रचनाएँ',
  },
};

export default async function Page() {
  const posts = await getAllPosts();
  const categories = await getCategories();
  const popularPosts = await getPopularPosts(3);

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-600">अभी कोई रचना उपलब्ध नहीं है।</p>
      </div>
    );
  }

  return <MagazineLayout posts={posts} categories={categories} popularPosts={popularPosts} />;
}