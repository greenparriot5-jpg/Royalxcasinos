import { Helmet } from "react-helmet-async";
import BlogHero from "./BlogHero";
import BlogPosts from "./BlogPosts";
import InternalLinksArticle from "./InternalLinksArticle";

function Blog() {
  return (
    <>
     <Helmet>
  <title>Royal X Casino 777 Blog | Gaming Guides & Information</title>
  <meta
    name="description"
    content="Explore Royal X Casino 777 gaming guides, mobile access information, account guidance, platform features, promotions and platform information"
  />
  <meta
    name="robots"
    content="index, follow, max-image-preview:large"
  />
  <link
    rel="canonical"
    href="https://royalxcasinos777.com/blog"
  />
  <meta property="og:url" content="https://royalxcasinos777.com/blog" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Royal X Casino 777 Blog | Gaming Guides & Information" />
  <meta property="og:description" content="Explore Royal X Casino 777 gaming guides, mobile access information, account guidance, platform features and promotions" />
  <meta property="og:image" content="https://royalxcasinos777.com/og-image.jpg" />
</Helmet>

      <main>
        <BlogHero />
        <BlogPosts />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Blog;