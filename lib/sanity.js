import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Category के posts fetch करने के लिए
export async function getPostsByCategory(categorySlug) {
  const query = `*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "mainImage": mainImage,
    "mainImageUrl": mainImage,
    publishedAt,
    category->{
      name,
      slug
    }
  }`;

  try {
    const posts = await client.fetch(query, { categorySlug });
    return posts || [];
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return [];
  }
}

// ⭐ Individual post fetch करने के लिए (यह add करें)
export async function getPostBySlugAndCategory(slug, categorySlug) {
  const query = `*[_type == "post" && slug.current == $slug && category->slug.current == $categorySlug][0] {
    _id,
    title,
    slug,
    content,
    "mainImage": mainImage,
    "mainImageUrl": mainImage,
    mainImageCaption,
    publishedAt,
    views,
    category->{
      name,
      slug
    }
  }`;

  try {
    const post = await client.fetch(query, { slug, categorySlug });
    return post || null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

// All posts fetch करने के लिए
export async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "mainImageUrl": mainImage,
    publishedAt,
    category->{
      name,
      slug
    }
  }`;

  try {
    const posts = await client.fetch(query);
    return posts || [];
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

// Categories fetch करने के लिए
export async function getCategories() {
  const query = `*[_type == "category"] | order(name asc) {
    _id,
    name,
    slug
  }`;

  try {
    const categories = await client.fetch(query);
    return categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Popular posts fetch करने के लिए
export async function getPopularPosts(limit = 5) {
  const query = `*[_type == "post"] | order(views desc, publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    "mainImageUrl": mainImage,
    publishedAt,
    views,
    category->{
      name,
      slug
    }
  }`;

  try {
    const posts = await client.fetch(query);
    return posts || [];
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    return [];
  }
}

// ⭐ Post views increment करने के लिए (optional, अगर views count करना हो)
export async function incrementPostViews(postId) {
  try {
    await client
      .patch(postId)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit();
  } catch (error) {
    console.error("Error incrementing views:", error);
  }
}