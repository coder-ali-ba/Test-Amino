import labImage from "../assets/lab.webp";
import microImage from "../assets/micro.webp";

export default function Cards() {
  return (
    <div className="w-full py-20 ">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#0b3c4c] mb-10">
        The Modern Aminos Guarantee
      </h1>

      <div className="flex flex-col lg:flex-row items-center pt-6 gap-8 justify-between  ">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={labImage}
            alt="lab"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-[#0b3c4c]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            3rd Party Multi Vial Batch Tested
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-6 text-gray-700">
            At Modern Aminos, we prioritize the quality and authenticity of
            every product we offer. Each product undergoes third-party,
            multi-vial batch testing to verify purity, compound identity,
            quantity, and endotoxin levels. In addition to this rigorous testing
            process, every vial includes a unique batch number, allowing you to
            directly match your product to its corresponding laboratory testing
            report.
          </p>

          <h3 className="text-lg font-semibold mb-4">
            Login for the full experience.
          </h3>

          <button className="bg-[#2c6e91] hover:bg-[#1f5672] text-white px-6 py-2 rounded-full transition">
            Login
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center mt-6 pt-6 gap-8 justify-between  ">
        <div className="w-full lg:w-1/2 text-[#0b3c4c]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Customer Service and Experience Always Comes First
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-6 text-gray-700">
            We understand that even though high quality research materials
            allows for the best most reliable results in labratory settinsg,
            things like slow shipping, and poor customer service can make
            already tedious research more of a headache. That is why here at
            Modern Aminos our customer service and shipping teams work around
            the clock to ensure that you are getting your material fast, and any
            shipping related inquries handled
          </p>

          <h3 className="text-lg font-semibold mb-4">
            Login for the full experience.
          </h3>

          <button className="bg-[#2c6e91] hover:bg-[#1f5672] text-white px-6 py-2 rounded-full transition">
            Login
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={microImage}
            alt="lab"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
