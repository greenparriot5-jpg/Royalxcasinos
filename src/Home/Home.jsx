import HeroSection from "./HeroSection";
import GameSection from "./GameSection";
import ContentSection from "./ContentSection";
import InternalLinksArticle from "./InternalLinksArticle";

function Home() {
  return (
    <main>
      <HeroSection />
      <GameSection />
      <ContentSection />
      <InternalLinksArticle />
    </main>
  );
}

export default Home;