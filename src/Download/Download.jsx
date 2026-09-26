import { Helmet } from "react-helmet-async";
import DownloadHero from "./DownloadHero";
import InternalLinksArticle from "./InternalLinksArticle";

function Download() {
  return (
    <>
      <Helmet>
        <title>Royal X Casino Download | Mobile Gaming Access</title>

        <meta
          name="description"
          content="Learn how to access Royal X Casino on compatible mobile devices, explore download information, platform features, account guidance, and gaming resources."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://royalxcasinos777.com/download"
        />
      </Helmet>

      <main>
        <DownloadHero />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Download;