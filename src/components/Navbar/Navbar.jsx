import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../UI/Button"; // Pastikan Button dari slice sebelumnya sudah ada

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

  // Menyimpan data navigasi di dalam array agar lebih rapi (DRY Principle)
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
          ? "bg-[#FAF6F2]/90 backdrop-blur-md shadow-sm" // Muncul saat di-scroll
          : "bg-transparent" // Transparan saat di paling atas
      }`}
    >
      {/* Brand Logo / Text */}
      <Link
        to="/"
        className="text-2xl font-semibold tracking-[0.2em] text-[#001020]"
      >
        DADAP BATIK
      </Link>

      {/* Desktop Navigation (Pill Menu) */}
      <div className="hidden lg:flex items-center bg-[#FDF9F6] shadow-[0_2px_10px_rgba(0,0,0,0.03)] rounded-full px-8 py-3 gap-8 border border-[#F2E5DD]">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `text-sm font-semibold tracking-wide transition-colors ${
                isActive
                  ? "text-[#B8860B] underline" // Warna emas/cokelat terang untuk active state
                  : "text-[#5C4D46] hover:text-[#B8860B]"
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
          {/* Menggunakan micro-component Button yang sudah kita buat sebelumnya */}
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
            className={`block w-6 h-0.5 bg-[#4D342D] transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#4D342D] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#4D342D] transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
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
              `px-6 py-3 text-sm font-semibold tracking-wide ${
                isActive ? "text-[#B8860B] bg-[#F2E5DD]/50" : "text-[#5C4D46]"
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
