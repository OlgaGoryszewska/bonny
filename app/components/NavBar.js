"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Bespoke Jewelry", href: "#bespoke-jewelry" },
  { label: "Pieces", href: "#pieces" },
  { label: "Gemstones", href: "#gemstones" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrolledState = () => {
      setHasScrolled(window.scrollY > 12);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  return (
    <header className={`site-header${hasScrolled ? " is-scrolled" : ""}`}>
      <a className="logo-link" href="/" aria-label="Bonny home">
        <Image
          src="/logo_bonny_text.png"
          alt="Bonny"
          width={72}
          height={64}
          priority
        />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-controls="main-menu"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`main-nav${isMenuOpen ? " is-open" : ""}`}
        id="main-menu"
        aria-label="Main menu"
      >
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
