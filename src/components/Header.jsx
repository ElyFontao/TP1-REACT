import { useState } from "react";
import { Icon } from "@iconify/react";
import LogoNavbar from "/assets/LogoNavbar.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-red-900 bg-opacity-30 backdrop-blur-md z-50 transition-all duration-300">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={LogoNavbar} alt="Logo" className="w-[80px]" />
        </div>

        {/* Botón hamburguesa (solo visible en mobile) */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Abrir o cerrar menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links de navegación (desktop) */}
        <ul className="hidden md:flex sm:space-x-8 space-x-4 px-4">
          {["Inicio", "Nosotros", "Contacto", "Soporte"].map((item) => (
            <li key={item}>
              <a
                href="/"
                className="sm:text-lg text-sm text-white hover:text-sky-100 transition-transform duration-300 transform hover:scale-110"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Redes sociales (desktop) */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block transition-transform duration-300 transform hover:scale-125"
              >
                <Icon icon="bi:instagram" className="sm:text-2xl text-lg text-white hover:text-sky-100" />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block transition-transform duration-300 transform hover:scale-125"
              >
                <Icon icon="bi:github" className="sm:text-2xl text-lg text-white hover:text-sky-100" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Menú Mobile desplegable */}
      <div
        className={`md:hidden absolute w-full bg-red-950 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {["Inicio", "Nosotros", "Contacto", "Soporte"].map((item) => (
            <li key={item} className="py-2 text-center">
              <a href="/" className="text-white hover:text-sky-100 block">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-4 px-4 py-2 border-t border-red-700 justify-center">
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Icon icon="bi:instagram" className="text-lg text-white hover:text-sky-100" />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Icon icon="bi:github" className="text-lg text-white hover:text-sky-100" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
