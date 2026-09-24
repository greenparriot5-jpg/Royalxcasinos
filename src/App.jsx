import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Common Components
import Header from "./Component/Header";
import Footer from "./Component/Footer";

// Pages
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Download from "./Download/Download";

// Dynamic Canonical URL - FIXED + Case Insensitive
function CanonicalURL() {
  const { pathname } = useLocation();

  useEffect(() => {
    const baseUrl = "https://royalxcasinos777.com";
    const lowerPath = pathname.toLowerCase();

    // Sitemap ke mutabiq canonical set karein (sab chote me)
    let canonicalUrl;

    if (lowerPath === "/" || lowerPath === "") {
      canonicalUrl = baseUrl + "/";
    } else if (lowerPath.startsWith("/blog")) {
      canonicalUrl = baseUrl + "/blog/";
    } else if (lowerPath.startsWith("/contact")) {
      canonicalUrl = baseUrl + "/contact/";
    } else if (lowerPath.startsWith("/about")) {
      canonicalUrl = baseUrl + "/about";
    } else if (lowerPath.startsWith("/download")) {
      canonicalUrl = baseUrl + "/download";
    } else {
      canonicalUrl = baseUrl + lowerPath;
    }

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

// Scroll to top on every page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <CanonicalURL />
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About - chota aur bara dono */}
        <Route path="/about" element={<About />} />
        <Route path="/About" element={<About />} />

        {/* Blog - chota aur bara dono */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/Blog" element={<Blog />} />

        {/* Contact - chota aur bara dono */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Download - chota aur bara dono */}
        <Route path="/download" element={<Download />} />
        <Route path="/Download" element={<Download />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;