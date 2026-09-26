import { Helmet } from "react-helmet-async";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import InternalLinksArticle from "./InternalLinksArticle";

function About() {
  return (
    <>
     <Helmet>
  <title>About Royal X Casino 777 | Gaming Platform Information</title>
  <meta
    name="description"
    content="Learn about Royal X Casino 777, its gaming platform, available features, mobile access, account guidance, and platform information"
  />
  <meta
    name="robots"
    content="index, follow, max-image-preview:large"
  />
  <link
    rel="canonical"
    href="https://royalxcasinos777.com/about"
  />
  <meta property="og:url" content="https://royalxcasinos777.com/about" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="About Royal X Casino 777 | Gaming Platform Information" />
  <meta property="og:description" content="Learn about Royal X Casino 777, its gaming platform, available features, mobile access and account guidance" />
  <meta property="og:image" content="https://royalxcasinos777.com/og-image.jpg" />
</Helmet>

      <main>
        <AboutHero />
        <AboutContent />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default About;