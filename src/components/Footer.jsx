import { useState } from "react";
import logo from "../assets/logo-svg.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0d3d4f] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <img
            className="w-[100px] h-[40px] sm:w-[150px] sm:h-[55px] md:w-[250px] "
            src={logo}
            alt=""
          />
          <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
            Quality products and exceptional service are very important to us
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-base font-bold mb-3">Contact Us</h3>
            <a
              href="mailto:cs@modernaminos.com"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              cs@modernaminos.com
            </a>
          </div>

          <div>
            <h3 className="text-base font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Contact us"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-bold">Subscribe now to save 15%</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Subscribe and Get Exclusive Updates Straight to your Inbox for Free
          </p>
          <div className="flex items-center border border-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-400 outline-none"
            />
            <button
              onClick={handleSend}
              className="flex items-center gap-2 bg-white text-[#0d3d4f] px-4 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                />
              </svg>
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <p className="text-xs text-slate-400 text-center leading-relaxed max-w-5xl mx-auto">
          Please be advised: All compounds and research materials provided by
          Modern Aminos are strictly for laboratory and research use only. They
          are not approved for human consumption by the Food and Drug
          Administration (FDA). These products should not be used for any form
          of in vivo experimentation or for any other non-laboratory purpose. By
          purchasing these products, you acknowledge that they will be used
          exclusively within a controlled and qualified research environment.
        </p>
      </div>

      <div className="border-t border-white/10 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-400">
          Copyright 2026, All Rights Reserved.
        </p>
        <div className="flex items-center gap-5 flex-wrap justify-center">
          {[
            "Privacy Policy",
            "Refund Policy",
            "Terms & Conditions",
            "Terms of Service",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
