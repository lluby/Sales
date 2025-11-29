import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const timeoutRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const active = window.location.pathname;

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [active]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Jeda 300ms sebelum menutup
  };

  const linkClass = (path) =>
    active === path
      ? "text-gray-200 font-bold underline"
      : "hover:text-sky-200 transition";

  return (
    <nav
      className={`bg-gradient-to-r text-white shadow-md fixed top-0 w-full z-50 ${
        ["/kambing"].includes(active)
          ? " from-sky-600 to-blue-700"
          : ["/aqiqah"].includes(active)
          ? " from-purple-600 to-pink-600"
          : ["/qurban"].includes(active)
          ? "from-green-600 to-emerald-700"
          : ["/peranakan"].includes(active)
          ? "from-blue-600 to-sky-600"
          : "from-sky-600 to-blue-700"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <a href="/" className="text-3xl font-bold">
          Tanupatra Farm
        </a>
        <ul className="hidden md:flex space-x-8 items-center text-m font-semibold">
          <li>
            <a href="/" className={linkClass("/")}>
              Beranda
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 ${
                ["/kambing", "/aqiqah", "/qurban", "/peranakan"].includes(
                  active
                )
                  ? "text-gray-200 font-bold underline"
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
        <div
          className={`md:hidden text-white shadow-md ${
            ["/kambing"].includes(active)
              ? " from-sky-600 to-blue-700"
              : ["/aqiqah"].includes(active)
              ? " from-purple-600 to-pink-600"
              : ["/qurban"].includes(active)
              ? "from-green-600 to-emerald-700"
              : ["/peranakan"].includes(active)
              ? "from-blue-600 to-sky-600"
              : "from-sky-600 to-blue-700"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4">
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
                    ["/kambing", "/aqiqah", "/qurban", "/peranakan"].includes(
                      active
                    )
                      ? "text-gray-200 font-bold undeline"
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
                <ul className=" text-gray-100 mt-2 rounded-md overflow-hidden">
                  <li
                    className={`${
                      active === "/kambing" ? "border-b-2" : "border-0"
                    } `}
                  >
                    <a
                      href="/kambing"
                      className={`px-4 py-2 block ${
                        active === "/kambing"
                          ? "text-gray-200 font-semibold"
                          : "hover:text-gray-100"
                      }`}
                    >
                      Kambing
                    </a>
                  </li>
                  <li
                    className={`${
                      active === "/aqiqah" ? "border-b-2" : "border-0"
                    } `}
                  >
                    <a
                      href="/aqiqah"
                      className={`px-4 py-2 block ${
                        active === "/aqiqah"
                          ? "text-gray-200 font-semibold "
                          : "hover:text-gray-100"
                      }`}
                    >
                      Paket Aqiqah
                    </a>
                  </li>
                  <li
                    className={`${
                      active === "/qurban" ? "border-b-2" : "border-0"
                    } `}
                  >
                    <a
                      href="/qurban"
                      className={`px-4 py-2 block ${
                        active === "/qurban"
                          ? "text-gray-200 font-semibold"
                          : "hover:text-gray-100"
                      }`}
                    >
                      Kambing Qurban
                    </a>
                  </li>
                  <li
                    className={`${
                      active === "/peranakan" ? "border-b-2" : "border-0"
                    } `}
                  >
                    <a
                      href="/peranakan"
                      className={`px-4 py-2 block ${
                        active === "/peranakan"
                          ? "text-gray-200 font-semibold"
                          : "hover:text-gray-100"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
