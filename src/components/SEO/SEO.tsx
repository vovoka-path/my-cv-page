import React from 'react';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import schema from '../../data/JSON-LD-Schema.json';

type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
};

const SEO: React.FC<SeoProps> = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    siteUrl,
    image,
    social,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image}`,
    twitterUsername: social.find((item) => item.name === 'twitter')?.link.split('/')[3],
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta httpEquiv="content-language" content="en-us" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={seo.author} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      {children}
      {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> */}
    </>
  );
};

export default SEO;
