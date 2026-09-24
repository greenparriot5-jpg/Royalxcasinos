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

// Dynamic Canonical URL - FIXED
function CanonicalURL() {
  const { pathname } = useLocation();

  useEffect(() => {
    const baseUrl = "https://royalxcasinos777.com";

    // Sitemap ke mutabiq canonical set karein
    let canonicalUrl;

    if (pathname === "/" || pathname === "") {
      canonicalUrl = baseUrl + "/";
    } else if (pathname.startsWith("/blog")) {
      canonicalUrl = baseUrl + "/blog/";
    } else if (pathname.startsWith("/contact")) {
      canonicalUrl = baseUrl + "/contact/";
    } else if (pathname.startsWith("/about")) {
      canonicalUrl = baseUrl + "/about";
    } else if (pathname.startsWith("/download")) {
      canonicalUrl = baseUrl + "/download";
    } else {
      canonicalUrl = baseUrl + pathname;
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;