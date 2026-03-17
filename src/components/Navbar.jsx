import logo from "../assets/logo-svg.svg";
import { useState } from "react";

const navLinks = ["Home", "Contact Us"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <>
      <nav className="bg-white border-b border-slate-200  px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center ">
            <img
              className="w-[100px] h-[40px] sm:w-[150px] sm:h-[55px] md:w-[250px] "
              src={logo}
              alt=""
            />
          </div>

          <div className="hidden md:flex items-center gap-2 mr-20">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActive(link)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  active === link
                    ? "bg-slate-100 text-[#0d3d4f]"
                    : "text-slate-500 hover:text-[#0d3d4f] hover:bg-slate-50"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="text-slate-400 hover:text-[#0d3d4f] transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                />
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className="md:hidden text-slate-500 hover:text-[#0d3d4f] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-2 border-t border-slate-100 pt-3 pb-2 flex flex-col gap-1 px-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActive(link);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active === link
                    ? "bg-slate-100 text-[#0d3d4f]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-[#0d3d4f]"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>
      <div className="py-2 text-sm w-full bg-blue-900 text-white font-bold  flex items-center justify-center ">
        <p className="text-center">
          Login for the full experience. - For laboratory research use only. Not
          for human consumption.
        </p>
      </div>
    </>
  );
}
