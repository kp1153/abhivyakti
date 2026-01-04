import Image from "next/image";

const PortableTextComponents = {
  types: {
    cloudinaryImage: ({ value }) => {
      if (!value?.url) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video">
            <Image
              src={value.url}
              alt={value.caption || "Image"}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover rounded"
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    youtube: ({ value }) => {
      if (!value?.url) return null;
      const getYouTubeId = (url) => {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
      };
      const videoId = getYouTubeId(value.url);
      if (!videoId) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded"
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      return (
        <a href={href} className="text-blue-600 underline">
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    normal: ({ children }) => <p className="my-4 leading-7">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside my-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside my-4">{children}</ol>,
  },
};

export default PortableTextComponents;