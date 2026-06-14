import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../UI/Button"; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "BERANDA", path: "/" },
    { name: "KISAH KAMI", path: "/our-story" },
    { name: "PROSES", path: "/process" },
    { name: "KATALOG", path: "/catalog" },
    { name: "TRY-ON", path: "/try-on" },
    { name: "KONTAK", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF6F2]/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent" 
      }`}
    >
      {/* Brand Logo / Text */}
      <Link
        to="/"
        className="text-2xl font-semibold tracking-[0.2em] text-[#001020]"
      >
        DADAP BATIK
      </Link>

      {/* Desktop Navigation (Pill Menu with Glassmorphism) */}
      <div className="hidden lg:flex items-center bg-white/40 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-full px-10 py-3 gap-8 border border-white/60">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              // Mengubah font-bold menjadi font-normal agar Be Vietnam Pro menggunakan weight Regular (400)
              `relative text-[14px] font-normal tracking-widest transition-colors py-1 ${
                isActive
                  ? "text-[#A87B1E] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2.5px] after:bg-[#A87B1E]"
                  : "text-[#001020] hover:text-[#A87B1E]"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* CTA Button & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Link to="/try-on">
            <Button variant="tryOn">TRY ON BATIK</Button>
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#001020] transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#001020] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#001020] transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-[#FAF6F2] border-b border-[#E6DDD6] shadow-lg flex flex-col lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              // Mengubah versi mobile menjadi font-normal juga
              `px-6 py-3 text-sm font-normal tracking-widest ${
                isActive ? "text-[#A87B1E] bg-[#F2E5DD]/50 border-l-4 border-[#A87B1E]" : "text-[#001020]"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <div className="px-6 py-4 md:hidden">
          <Link to="/try-on" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full" variant="tryOn">
              TRY ON BATIK
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;