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
          content="Explore Royal X Casino 777 gaming guides, mobile access information, account guidance, platform features, promotions, and responsible gaming resources."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://royalxcasinos777.com/blog"
        />
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