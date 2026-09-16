import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/notes/small-details-interface",
        destination: "/notes/pixel-perfect-without-the-pixel-trap",
        permanent: true,
      },
      {
        source: "/notes/component-actually-deserve-to-exist",
        destination: "/notes/when-the-plugin-isnt-the-answer",
        permanent: true,
      },
      {
        source: "/notes/design-to-code-translation",
        destination: "/notes/debugging-the-last-ten-percent",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
