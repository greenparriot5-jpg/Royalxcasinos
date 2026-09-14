import ContactHero from "./ContactHero";
import ContactContent from "./ContactContent";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <main className="bg-slate-950">
      <ContactHero />
      <ContactContent />
      <ContactForm />
    </main>
  );
}

export default Contact;