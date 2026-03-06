import { notFound } from "next/navigation";
import EpubReader from "@/components/EpubReader";

const books = {
  "alanghya-hai-prem": {
    title: "अलंघ्य है प्रेम",
    url: "https://res.cloudinary.com/daqajumfg/raw/upload/v1772816962/139_Alanghya_Hai_Prem_PRESS_-_Unknown_vso9s1.epub",
  },
};

export default async function ReaderPage({ params }) {
  const { slug } = await params;
  const book = books[slug];
  if (!book) return notFound();

  return <EpubReader title={book.title} url={book.url} />;
}