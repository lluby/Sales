import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const active = window.location.pathname;

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [active]);

  const linkClass = (path) =>
    active === path
      ? "text-sky-700 font-bold"
      : "hover:text-sky-200 transition";

  return (
    <nav className="bg-sky-400 text-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-3xl font-bold">Tanupatra Farm</h1>
        <ul className="hidden md:flex space-x-8 items-center text-m font-semibold">
          <li>
            <a href="/" className={linkClass("/")}>
              Beranda
            </a>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className={`flex items-center gap-1 ${
                ["/kambing", "/aqiqah", "/qurban", "/peranakan"].includes(active)
                  ? "text-sky-800 font-bold"
                  : "hover:text-sky-200"
              }`}
            >
              Kategori
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 bg-white text-gray-800 shadow-lg mt-2 rounded-md overflow-hidden w-40 border border-gray-200">
                <li>
                  <a
                    href="/kambing"
                    className={`px-4 py-2 block transition ${
                      active === "/kambing"
                        ? "bg-sky-200 font-semibold"
                        : "hover:bg-sky-100"
                    }`}
                  >
                    Kambing
                  </a>
                </li>

                <li>
                  <a
                    href="/aqiqah"
                    className={`px-4 py-2 block transition ${
                      active === "/aqiqah"
                        ? "bg-sky-200 font-semibold"
                        : "hover:bg-sky-100"
                    }`}
                  >
                    Paket Aqiqah
                  </a>
                </li>

                <li>
                  <a
                    href="/qurban"
                    className={`px-4 py-2 block transition ${
                      active === "/qurban"
                        ? "bg-sky-200 font-semibold"
                        : "hover:bg-sky-100"
                    }`}
                  >
                    Kambing Qurban
                  </a>
                </li>

                <li>
                  <a
                    href="/peranakan"
                    className={`px-4 py-2 block transition ${
                      active === "/peranakan"
                        ? "bg-sky-200 font-semibold"
                        : "hover:bg-sky-100"
                    }`}
                  >
                    Peranakan Kambing
                  </a>
                </li>

              </ul>
            )}
          </li>

          <li>
            <a href="/contact" className={linkClass("/contact")}>
              Kontak
            </a>
          </li>
        </ul>
        
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={toggleMobile}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-sky-400 text-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a href="/" className={linkClass("/")}>
                Beranda
              </a>
            </li>

            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full focus:outline-none"
              >
                <span
                  className={
                    ["/kambing", "/aqiqah", "/qurban"].includes(active)
                      ? "text-sky-700 font-bold"
                      : ""
                  }
                >
                  Kategori
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <ul className="bg-white text-gray-800 shadow-lg mt-2 rounded-md overflow-hidden border border-gray-200">
                  <li>
                    <a
                      href="/kambing"
                      className={`px-4 py-2 block ${
                        active === "/kambing"
                          ? "bg-sky-200 font-semibold"
                          : "hover:bg-sky-100"
                      }`}
                    >
                      Kambing
                    </a>
                  </li>

                  <li>
                    <a
                      href="/aqiqah"
                      className={`px-4 py-2 block ${
                        active === "/aqiqah"
                          ? "bg-sky-200 font-semibold"
                          : "hover:bg-sky-100"
                      }`}
                    >
                      Paket Aqiqah
                    </a>
                  </li>

                  <li>
                    <a
                      href="/qurban"
                      className={`px-4 py-2 block ${
                        active === "/qurban"
                          ? "bg-sky-200 font-semibold"
                          : "hover:bg-sky-100"
                      }`}
                    >
                      Kambing Qurban
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="/contact" className={linkClass("/contact")}>
                Kontak
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
