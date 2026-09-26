import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import GameSection from "./GameSection";
import ContentSection from "./ContentSection";
import InternalLinksArticle from "./InternalLinksArticle";

function Home() {
  return (
    <>
     <Helmet>
  <title>Royal X Casino 777 | Online Gaming Platform</title>
  <meta name="description" content="Explore Royal X Casino 777, including gaming features, mobile access, account information" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  
  <link rel="canonical" href="https://royalxcasinos777.com/" />
  <meta property="og:url" content="https://royalxcasinos777.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Royal X Casino 777 | Online Gaming Platform" />
  <meta property="og:description" content="Explore Royal X Casino 777, including gaming features, mobile access, account information" />
  <meta property="og:image" content="https://royalxcasinos777.com/og-image.jpg" />
</Helmet>

      <main>
        <HeroSection />
        <GameSection />
        <ContentSection />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Home;