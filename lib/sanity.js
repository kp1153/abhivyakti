import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "mainImage": mainImage.asset->url,
      "category": category->{title, slug},
      "author": author->{name, slug}
    }`
  );
}

export async function getPostBySlug(slug) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      body,
      excerpt,
      "mainImage": mainImage.asset->url,
      "category": category->{title, slug},
      "author": author->{name, slug, "image": image.asset->url, bio}
    }`,
    { slug }
  );
}

export async function getPostsByCategory(categorySlug) {
  return client.fetch(
    `*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "mainImage": mainImage.asset->url,
      "category": category->{title, slug},
      "author": author->{name, slug}
    }`,
    { categorySlug }
  );
}

export async function getCategories() {
  return client.fetch(
    `*[_type == "category"] {
      _id,
      title,
      slug
    }`
  );
}

export async function getPopularPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...6] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "mainImage": mainImage.asset->url,
      "category": category->{title, slug},
      "author": author->{name, slug}
    }`
  );
}