const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://revamped-portfolio.netlify.app";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Parth Panchal",
        url: siteUrl,
        jobTitle: "Frontend Developer",
        email: "mailto:parth.webdev18@gmail.com",
        sameAs: ["https://github.com/parthpanchal7"],
        knowsAbout: [
          "Frontend development",
          "React",
          "Next.js",
          "JavaScript",
          "WordPress",
          "WooCommerce",
          "Shopify",
          "Tailwind CSS",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Parth Panchal — Frontend Developer",
        description: "Portfolio of Parth Panchal, a frontend developer working across React, WordPress, Shopify and commerce interfaces.",
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
