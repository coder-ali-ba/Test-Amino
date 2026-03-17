import { useState } from "react";

const faqs = [
  {
    q: "Do you ship internationally?",
    a: "At the moment we only ship to the USA. We're working hard to expand our shipping to more countries soon — stay tuned!",
  },
  {
    q: "Why do I need an account to view the site?",
    a: "An account helps us personalize your experience, keep your orders safe, and give you access to exclusive deals and early product launches.",
  },
  {
    q: "How long do orders take to arrive?",
    a: "Standard orders typically arrive within 5–7 business days. Expedited shipping options are available at checkout for faster delivery.",
  },
  {
    q: "I think my package may be lost, or I'm having an order issue, what should I do?",
    a: "Please reach out to our support team within 30 days of your expected delivery date. We'll investigate right away and make sure you're taken care of.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen bg-[#eef1f8] px-4 py-14 font-sans mt-10">
      <div className="text-center mb-10">
        <span className="inline-block bg-[#1d0f9b] text-white text-2xl font-medium px-5 py-2 rounded-full mb-4 tracking-wide">
          Frequently Asked Questions
        </span>
        <h1 className="text-5xl font-bold text-[#0d1f2d]">Need Help?</h1>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden">
        <div className="bg-[#0d3d4f] px-7 py-4 text-xs font-semibold tracking-widest text-[#a8cdd8] uppercase">
          General Questions
        </div>

        <div className="p-5 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-[#0d3d4f]" : "border-slate-200"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className={`w-full flex justify-between items-center px-5 py-4 text-left text-[15px] font-medium transition-colors duration-200 ${
                    isOpen
                      ? "bg-[#f0f7fa] text-[#0d3d4f]"
                      : "bg-white text-[#1a2e3b]"
                  }`}
                >
                  <span>{item.q}</span>
                  <span
                    className={`ml-3 flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-lg transition-all duration-200 ${
                      isOpen
                        ? "bg-[#0d3d4f] border-[#0d3d4f] text-white"
                        : "border-slate-300 text-slate-400"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`text-sm text-[#4a6070] leading-relaxed px-5 transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40 pb-5 pt-1" : "max-h-0"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
