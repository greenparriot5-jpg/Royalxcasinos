import { Helmet } from "react-helmet-async";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import InternalLinksArticle from "./InternalLinksArticle";

function Contact() {
  return (
    <>
     <Helmet>
  <title>Contact Royal X Casino 777 | Support & Assistance</title>
  <meta
    name="description"
    content="Contact Royal X Casino 777 for questions, feedback, account guidance, platform information, and general support"
  />
  <meta
    name="robots"
    content="index, follow, max-image-preview:large"
  />
  <link
    rel="canonical"
    href="https://royalxcasinos777.com/contact"
  />
  <meta property="og:url" content="https://royalxcasinos777.com/contact" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Contact Royal X Casino 777 | Support & Assistance" />
  <meta property="og:description" content="Contact Royal X Casino 777 for questions, feedback, account guidance, platform information, and general support" />
  <meta property="og:image" content="https://royalxcasinos777.com/og-image.jpg" />
</Helmet>

      <main>
        <ContactHero />
        <ContactForm />
        <InternalLinksArticle />
      </main>
    </>
  );
}

export default Contact;