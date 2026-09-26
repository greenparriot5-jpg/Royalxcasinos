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
          content="Contact Royal X Casino 777 for questions, feedback, account guidance, platform information, and general support assistance."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://royalxcasinos777.com/contact"
        />
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