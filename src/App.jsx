import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
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

// FIX 1: Bade URL ko Chote par bhejne ke liye (404 Khatam)
function LowercaseRedirect() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname!== pathname.toLowerCase()) {
      navigate(pathname.toLowerCase(), { replace: true });
    }
  }, [pathname, navigate]);

  return null;
}

// FIX 2: Sahi Canonical Tag Lagane ke liye (Duplicate Khatam)
function CanonicalURL() {
  const { pathname } = useLocation();

  useEffect(() => {
    const baseUrl = "https://royalxcasinos777.com";
    const canonicalUrl = baseUrl + (pathname === "/"? "/" : pathname.toLowerCase());

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
      <LowercaseRedirect />
      <CanonicalURL />
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Sirf chote wale routes rakhe hain - Duplicate khatam */}
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