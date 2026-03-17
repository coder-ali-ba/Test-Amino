import compass from "../assets/3gkbsdhor4qeex0j3ofu88f846b4qzuu.webp";

export default function QualityBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={compass}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0a1f35]/80" />

      <div className="relative z-10 flex flex-col items-center justify-center py-16 px-6 text-center">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg">
          <svg
            className="w-6 h-6 text-[#0a1f35]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>

        <p className="text-white text-3xl md:text-4xl font-bold max-w-3xl leading-snug">
          Quality products and exceptional service are very important to us
        </p>
      </div>
    </div>
  );
}
