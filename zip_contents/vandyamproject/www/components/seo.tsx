import Script from "next/script";

interface SEOProps {
  type?: "website" | "article" | "product" | "organization";
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
}

export function SEO({
  type = "website",
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  structuredData,
}: SEOProps) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": type === "website" ? "WebPage" : type === "article" ? "Article" : type === "product" ? "Product" : "Organization",
    name: title,
    description: description,
    url: url,
    ...(image && { image: image }),
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(author && { author: { "@type": "Person", name: author } }),
    ...(section && { articleSection: section }),
    ...(tags && { keywords: tags.join(", ") }),
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData),
        }}
      />
    </>
  );
}

// Specific SEO components for different content types
export function ArticleSEO({ title, description, url, image, publishedTime, modifiedTime, author, section, tags }: Omit<SEOProps, "type">) {
  return (
    <SEO
      type="article"
      title={title}
      description={description}
      url={url}
      image={image}
      publishedTime={publishedTime}
      modifiedTime={modifiedTime}
      author={author}
      section={section}
      tags={tags}
    />
  );
}

export function ProductSEO({
  title,
  description,
  url,
  image,
  price,
  availability = "InStock",
  brand = "Vandyam",
}: Omit<SEOProps, "type"> & { price?: string; availability?: string; brand?: string }) {
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: description,
    url: url,
    image: image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      availability: `https://schema.org/${availability}`,
      ...(price && { price: price, priceCurrency: "USD" }),
    },
  };

  return <SEO type="product" title={title} description={description} url={url} image={image} structuredData={productStructuredData} />;
}
