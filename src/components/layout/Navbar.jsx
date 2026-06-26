import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ config }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu} aria-label={`${config.brandName} home`}>
          <img src={config.logo.src} alt={config.logo.alt} />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {config.navigationLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
